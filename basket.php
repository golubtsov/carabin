<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="/style/card.css.php">
    <link rel="stylesheet" href="/style/style.css.php">
    <link href="/style/adaptive.css.php" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="/style/basket_page.css.php">

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

        <div class="block_basket">
            <div class="basket_title">
                <p>Оформление заказа</p>
            </div>
            <div class="block_bascet">
                <p>Корзина</p>
                <div class="btn_clear" style="background: url('./images/close.png');"></div>
            </div>
            <div class="block_oders">
                <?php require './include/get_pop_products.php' ?>
            </div>
            <div class="block_price">
                <h3 class="price">Цена:</h3>
            </div>
            <div class="block_form">
                <form action="server.php" method="POST">
                    <h2>Оформление заказа</h2>
                    <p><label for="lname">Фамилия<b>*</b></label></p>
                    <p><input type="text" id="lname" required></p>
                    <p><label for="fname">Имя<b>*</b></label></p>
                    <p><input type="text" id="fname" required></p>
                    <p><label for="mname">Отчество<b>*</b></label></p>
                    <p><input type="text" id="mname" required></p>
                    <p><label for="phone">Номер телефона<b>*</b></label></p>
                    <p><input type="text" id="phone" required></p>
                    <button type="submit">Оформить заказ</button>
                </form>
            </div>
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
    
    <script src="./script.js.php"></script>

</body>
</html>