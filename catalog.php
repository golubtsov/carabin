<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Категории</title>

    <link rel="stylesheet" href="/style/card.css.php">
    <link rel="stylesheet" href="/style/style.css.php">
    <link rel="stylesheet" href="/style/category.css.php">
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
                    <li><a href="index.php" class="link">Главная</a></li>
                    <li><a href="catalog.php" class="link">Каталог</a></li>
                    <li><a href="about.php" class="link">О нас</a></li>
                </ul>
            </div>
            <div class="blockOrder">
                <ul>
                    <li><a href="basket.php" class="basket">Корзина</a></li>
                    <li><a href="" class="basket">Войти</a></li>
                </ul>
            </div>
        </div>

        <div class="block_catalog">
            <div class="block_item">
                <?php require './include/get_categories.php' ?>
            </div>
            <div class="adaptive_category">
                <div class="text">
                    <h2>Категории</h2>
                </div>
                <div class="category_links">
                <?php require './include/get_categories.php' ?>
                </div>
            </div>
        </div>

        <div class="block_products">
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