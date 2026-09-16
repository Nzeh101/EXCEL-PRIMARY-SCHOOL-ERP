<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
        <meta name="theme-color" content="#12643c">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="apple-mobile-web-app-title" content="Excel School">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Excel Primary School ERP</title>
        <link rel="icon" href="{{ asset('erp/assets/excel-shield-generated.webp') }}?v={{ filemtime(public_path('erp/assets/excel-shield-generated.webp')) }}" type="image/webp">
        <link rel="apple-touch-icon" href="{{ asset('erp/assets/excel-shield-generated.webp') }}">
        <link rel="stylesheet" href="{{ asset('erp/styles.css') }}?v={{ filemtime(public_path('erp/styles.css')) }}">
    </head>
    <body data-student-count="{{ $schoolStudentCount }}" data-teacher-count="10" data-demo-accounts="{{ app()->environment('production') ? 'false' : 'true' }}">
        <div id="app"></div>
        <script src="{{ asset('erp/app.js') }}?v={{ filemtime(public_path('erp/app.js')) }}"></script>
    </body>
</html>
