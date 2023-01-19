<!-- Получаем категории из базы данных и создаем панель навигации на странице catalog.php -->

<?php
$arr_cat = R::getAssoc('select * from categories');
for ($i=1; $i < count($arr_cat) + 1; $i++) { 
    echo '<div class="item"><a href="">' .$arr_cat[$i]['name_cat']. '</a></div>';
};
?>