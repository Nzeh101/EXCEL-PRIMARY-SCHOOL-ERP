<?php

namespace App\Services;

use ZipArchive;

class ClassExport
{
    public function table(string $year, string $term, string $class): array
    {
        $data = app(PeriodData::class)->bootstrap($year, $term);
        $rows = [];
        foreach ($data['students']->where('class_name', $class) as $student) {
            $balances = $data['balances']->where('student_id', $student->id);
            $review = $balances->isEmpty();
            $rows[] = [$student->admission_no, $student->last_name, $student->first_name, $student->gender ?? '', $student->guardian?->name ?? '', $student->guardian?->phone ?? '', $review ? '' : (int) $balances->sum('amount_due'), $review ? '' : (int) $balances->sum('amount_paid'), $review ? '' : (int) $balances->sum('balance'), $review ? 'Review / not assessed' : ($balances->sum('balance') > 0 ? 'Outstanding' : 'Cleared')];
        }

        $financial = in_array(request()->user()?->role, ['Director', 'School Manager', 'Super Admin'], true);
        if (! $financial) $rows = array_map(fn ($row) => array_slice($row, 0, 6), $rows);
        $headers = ['Admission No.', 'Surname', 'First Name', 'Gender', 'Guardian', 'Phone', 'Fees Due (MWK)', 'Paid (MWK)', 'Balance (MWK)', 'Status'];
        return ['title' => "$class — $year — $term", 'headers' => $financial ? $headers : array_slice($headers, 0, 6), 'rows' => $rows];
    }

    public function xlsx(array $table): string
    {
        $path = tempnam(sys_get_temp_dir(), 'school-export-');
        $zip = new ZipArchive;
        if ($zip->open($path, ZipArchive::OVERWRITE) !== true) {
            throw new \RuntimeException('Cannot create Excel file.');
        }
        $xml = fn ($value) => htmlspecialchars((string) $value, ENT_XML1 | ENT_QUOTES, 'UTF-8');
        $rows = '';
        foreach ([[$table['title']], $table['headers'], ...$table['rows']] as $i => $row) {
            $cells = '';
            foreach ($row as $column => $value) {
                $ref = chr(65 + $column).($i + 1);
                $cells .= is_int($value) ? '<c r="'.$ref.'"><v>'.$value.'</v></c>' : '<c r="'.$ref.'" t="inlineStr"><is><t xml:space="preserve">'.$xml($value).'</t></is></c>';
            }
            $rows .= '<row r="'.($i + 1).'">'.$cells.'</row>';
        }
        $zip->addFromString('[Content_Types].xml', '<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>');
        $zip->addFromString('_rels/.rels', '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>');
        $zip->addFromString('xl/workbook.xml', '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Class Register" sheetId="1" r:id="rId1"/></sheets></workbook>');
        $zip->addFromString('xl/_rels/workbook.xml.rels', '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>');
        $zip->addFromString('xl/worksheets/sheet1.xml', '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" state="frozen"/></sheetView></sheetViews><cols><col min="1" max="10" width="22" customWidth="1"/></cols><sheetData>'.$rows.'</sheetData><pageSetup orientation="landscape" paperSize="9"/></worksheet>');
        $zip->close();

        return $path;
    }
}
