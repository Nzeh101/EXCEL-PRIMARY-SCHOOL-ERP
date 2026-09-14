<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>{{ $title }}</title>
<style>@page { size: A4 landscape; margin: 10mm; } body { font: 11px Arial, sans-serif; color: #17213d; margin: 20px; } h1 { font-size: 18px; } table { border-collapse: collapse; width: 100%; table-layout: fixed; } th, td { border: 1px solid #ccc; padding: 6px; text-align: left; overflow-wrap: anywhere; } th { background: #eee; } thead { display: table-header-group; } tr { break-inside: avoid; } @media print { button { display: none; } body { margin: 0; } }</style></head>
<body><button onclick="window.print()">Print / Save PDF</button><h1>Excel Primary School — {{ $title }}</h1><p>{{ count($rows) }} students</p>
<table><thead><tr>@foreach ($headers as $header)<th>{{ $header }}</th>@endforeach</tr></thead><tbody>
@forelse ($rows as $row)<tr>@foreach ($row as $cell)<td>{{ is_int($cell) ? number_format($cell) : $cell }}</td>@endforeach</tr>
@empty<tr><td colspan="10">No students enrolled in this class for the selected period.</td></tr>@endforelse
</tbody></table></body></html>
