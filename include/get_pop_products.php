<?php
// require './include/db.php';
$pop = R::getAssoc('select * from products where popular = 1');
foreach ($pop as $el ) {
    echo '<div class="card_block">';
    echo '<div class="block_image">';
    echo '<img src="' .$el['product_url']. '">';
    echo '</div>';
    echo '<div class="product_name">' .$el['name_product']. '</div>';
    echo '<div class="product_maker">' .$el['produser']. '</div>';
    echo '<div class="product_price"><b>' .$el['price']. ' руб</b></div>';
    echo '<div class="btn_buy"><a href="/catalog.html">Подробнее</a></div>';
    echo '</div>';
}
?>