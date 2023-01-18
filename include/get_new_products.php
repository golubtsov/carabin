<?php
// require './include/db.php';
$new_products = R::getAssoc('select * from products where new = 1');
foreach ($new_products as $el ) {
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