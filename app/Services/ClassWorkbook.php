<?php

namespace App\Services;

use RuntimeException;
use ZipArchive;

/** Reads the workbook's cached cell values without executing spreadsheet formulas. */
class ClassWorkbook
{
    public const CLASSES = ['NURSERY' => 'Nursery', 'RECEPTION' => 'Reception', 'STD 1' => 'Standard 1', 'STD 2' => 'Standard 2', 'STD 3' => 'Standard 3', 'STD 4' => 'Standard 4', 'STD 5' => 'Standard 5', 'STD 6' => 'Standard 6', 'STD 7' => 'Standard 7', 'STD 8' => 'Standard 8'];

    public function read(string $path): array
    {
        $zip = new ZipArchive;
        if ($zip->open($path) !== true) {
            throw new RuntimeException('Cannot open XLSX workbook.');
        }
        try {
            $xml = function ($path) use ($zip) {
                $text = $zip->getFromName($path);
                if ($text === false || str_contains($text, '<!DOCTYPE')) {
                    throw new RuntimeException('Invalid workbook XML.');
                }

                return simplexml_load_string($text, \SimpleXMLElement::class, LIBXML_NONET) ?: throw new RuntimeException('Invalid workbook XML.');
            };
            $strings = [];
            if ($zip->locateName('xl/sharedStrings.xml') !== false) {
                foreach ($xml('xl/sharedStrings.xml')->si as $item) {
                    $strings[] = implode('', array_map('strval', $item->xpath('.//*[local-name()="t"]')));
                }
            }
            $rels = [];
            foreach ($xml('xl/_rels/workbook.xml.rels')->Relationship as $rel) {
                $rels[(string) $rel['Id']] = (string) $rel['Target'];
            }
            $result = [];
            $seen = [];
            foreach ($xml('xl/workbook.xml')->sheets->sheet as $sheet) {
                $name = strtoupper(trim((string) $sheet['name']));
                if (! isset(self::CLASSES[$name])) {
                    continue;
                }
                $seen[] = $name;
                $rid = (string) $sheet->attributes('http://schemas.openxmlformats.org/officeDocument/2006/relationships')['id'];
                $target = $rels[$rid];
                $target = str_starts_with($target, '/') ? ltrim($target, '/') : 'xl/'.$target;
                $header = false;
                foreach ($xml($target)->sheetData->row as $row) {
                    $cells = [];
                    foreach ($row->c as $cell) {
                        $column = preg_replace('/\d/', '', (string) $cell['r']);
                        $value = (string) $cell->v;
                        if ((string) $cell['t'] === 's') {
                            $value = $strings[(int) $value] ?? '';
                        }
                        if ((string) $cell['t'] === 'inlineStr') {
                            $value = implode('', array_map('strval', $cell->xpath('.//*[local-name()="t"]')));
                        }
                        if ($value !== '') {
                            $cells[$column] = trim($value);
                        }
                    }
                    if (($cells['B'] ?? '') === 'SURNAME' && ($cells['C'] ?? '') === 'FIRSTNAME') {
                        $header = true;

                        continue;
                    }
                    if (! $header || empty($cells['B']) || empty($cells['C']) || ! is_numeric($cells['A'] ?? null)) {
                        continue;
                    }
                    $issues = [];
                    foreach (['E', 'F', 'G', 'H', 'I', 'J'] as $col) {
                        if (isset($cells[$col]) && (! is_numeric($cells[$col]) || (float) $cells[$col] < 0 || floor((float) $cells[$col]) !== (float) $cells[$col])) {
                            $issues[] = "Invalid amount in {$col}";
                        }
                    }
                    if (! isset($cells['E'])) {
                        $issues[] = 'Fees missing';
                    }
                    $paid = array_sum(array_map(fn ($c) => is_numeric($cells[$c] ?? null) ? (int) $cells[$c] : 0, ['F', 'G', 'H']));
                    if (isset($cells['I']) && (float) $cells['I'] !== (float) $paid) {
                        $issues[] = 'Total differs from payment installments';
                    }
                    if (isset($cells['J']) && (float) $cells['J'] !== (float) (($cells['E'] ?? 0) - $paid)) {
                        $issues[] = 'Balance differs from fees minus installments';
                    }
                    if ($paid > (float) ($cells['E'] ?? 0)) {
                        $issues[] = 'Payments exceed fees';
                    }
                    $result[] = ['sheet' => $name, 'class' => self::CLASSES[$name], 'row' => (int) $row['r'], 'cells' => $cells, 'issues' => $issues];
                }
            }
            if (count($seen) !== 10 || ! $result) {
                throw new RuntimeException('Expected all ten class tabs with named student rows.');
            }

            return $result;
        } finally {
            $zip->close();
        }
    }
}
