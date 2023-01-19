<?php
    header('content-type: text/css');
?>

.block_catalog {
    width: 100%;
}

.block_item {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    background-color: #EEEEEE;
    padding: 20px 0px;
}

.item {
    margin: auto;
}

.item a {
    font-size: 20px;
    cursor: pointer;
    padding: 8px 12px;
    background-color: rgb(0, 0, 0);
    color: white;
    text-decoration: none;
}

.block_products {
    width: 100%;
    /* height: 100vh; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.product {
    width: 280px;
    height: 400px;
    background-color: burlywood;
    margin: 20px auto;
}

.adaptive_category {
    display: none;
}

.text {
    width: 100%;
    text-align: center;
    margin: auto;
    padding: 12px;
    cursor: pointer;
    background-color: #EEEEEE;
}

.adaptive_category .item {
    margin-top: 2px;
    width: 100%;
    text-align: center;
    background-color: rgb(0, 0, 0);
    padding: 15px;
}

.category_links {
    width: 100%;
    display: none;
}

.active {
    border-color: #ff0000;
}