<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Expense tracker</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
        <link href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" rel="stylesheet" />
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <link rel="stylesheet" href="{{asset("css/assets/css/custom.css")}}">
        <link rel="stylesheet" href="{{asset('css/assets/css/now-ui-kit.css')}}">
        <link rel="stylesheet" href="{{asset('css/assets/demo/demo.css')}}">
    </head>
    <body>
        <div id="app"></div>
        {{-- defining react --}}
        <script src="{{asset('js/app.js')}}" defer></script>
    </body>
</html>
