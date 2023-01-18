<?php
// require './include/db.php';
$result = R::getAssoc('select * from categories');
for ($i=1; $i < count($result) + 1; $i++) { 
    echo '<div class="item_category" style="background: url(../images/img_cat/'.$result[$i]['url_cat'].');">';
    echo '<a href="">' .$result[$i]['name_cat']. '</a>';
    echo '</div>';
}
?>