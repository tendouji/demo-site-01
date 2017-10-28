<!doctype html>
<html class="no-js<?= ($page == 'home' ? ' home' : '') ?>" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Janet Lee | Official Website</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">

        <meta property="og:image" content="http://janetsing.com/fb-thumb.jpg" />

        <link rel="shortcut icon" type="image/x-icon" href="/assets/icons/favicon.ico">
        <link rel="apple-touch-icon" sizes="57x57" href="/assets/icons/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/icons/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/icons/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/icons/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/icons/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/icons/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png">
        <link rel="manifest" href="/assets/icons/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/assets/icons/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="fonts/stylesheet.css">
        <?php if($page=="home" ) { ?>
        <link rel="stylesheet" href="css/swiper.min.css">
        <?php } ?>
        <?php if($page=="gallery" || $page=="media" ) { ?>
        <link rel="stylesheet" href="css/magnific-popup.css">
        <?php } ?>
        <link rel="stylesheet" href="css/style.css">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>

    <?php 
        $albumClassArr = ["adventure-capital", "village-voice"];
        if($page == 'album' && isset($_GET['id'])) {
            $albumClass = $albumClassArr[(int)$_GET['id']-1];
        }
    ?>
    <body class="site-preloading <?= $page . (isset($albumClass) ? " " . $albumClass : "" ) ?>">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- page content starts here -->