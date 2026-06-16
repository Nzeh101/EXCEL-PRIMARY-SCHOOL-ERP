<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Hillside Secondary School ERP</title>
        <link rel="icon" href="{{ asset('erp/assets/hillside-icon-white.png') }}" type="image/png" sizes="192x192">
        <link rel="apple-touch-icon" href="{{ asset('erp/assets/hillside-icon-white.png') }}">
        <link rel="stylesheet" href="{{ asset('erp/styles.css') }}?v={{ filemtime(public_path('erp/styles.css')) }}">
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ asset('erp/app.js') }}?v={{ filemtime(public_path('erp/app.js')) }}"></script>
    </body>
</html>
