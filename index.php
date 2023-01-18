<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Туристический магазин Карабин</title>
    <link rel="stylesheet" href="/style/card.css.php">
    <link rel="stylesheet" href="/style/style.css.php">
    <link rel="stylesheet" href="/style/modalElem.css.php">
    <link href="/style/adaptive.css.php" rel="stylesheet" type="text/css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Norican&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bona+Nova:ital@1&family=Italianno&display=swap" rel="stylesheet">
</head>
<body>
    <?php require './include/db.php' ?>
    <div class="wrapper">
        <div class="menu">
            <div class="blockLogo">
                <h1 class="textLogo">Карабин</h1>
            </div>
            <div class="blockLink">
                <ul>
                    <li><a href="/index" class="link">Главная</a></li>
                    <li><a href="/catalog" class="link">Каталог</a></li>
                    <li><a href="/about" class="link">О нас</a></li>
                </ul>
            </div>
            <div class="blockOrder">
                <ul>
                    <li><a href="/basket" class="basket">Корзина</a></li>
                    <li><a href="" class="basket">Войти</a></li>
                </ul>
            </div>
        </div>

        <div class="screensaver">
            <h1 class="mainTitle">Всегда на вершине</h1>
        </div>

        <div class="block_title">
            <h1 class="title">Каталог</h1>
        </div>

        <div class="block_catalog grid">
            <?php require './include/create_categories.php'; ?>
        </div>

        <div class="block_title_2">
            <h1 class="title_2">Популярное</h1>
        </div>

        <div class="block_popular grid">
            <?php require './include/get_pop_products.php' ?>
        </div>

        <div class="block_title_2">
            <h1 class="title_2">Новинки</h1>
        </div>

        <div class="block_new grid">
            <?php require './include/get_new_products.php' ?>
        </div>

        <footer>
            <div class="soc_network">
                <div class="soc_net inst"></div>
                <div class="soc_net vk"></div>
                <div class="soc_net telega"></div>
            </div>
            <div class="number_phone">
                <p>+7(5825)253-421-478</p>
                <p>+7(5825)258-963-486</p>
                <p>+7(5825)482-951-831</p>
            </div>
            <div class="adres">
                <a href="">Красноармейский проспект, 94, Барнаул, Алтайский край</a>
            </div>
        </footer>

    </div>
    
    <script src="/script.js"></script>
</body>
</html>