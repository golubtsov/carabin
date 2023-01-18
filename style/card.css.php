<?php
    header('content-type: text/css');
?>

@import url('https://fonts.googleapis.com/css2?family=Bona+Nova:ital@1&family=Italianno&family=Roboto:ital,wght@1,100&display=swap');

.card_block {
    margin: 50px auto;
    width: 280px;
    max-height: 460px;
    background-color: #fff;
    text-align: center;
    font-size: 15px;
    cursor: pointer;
    box-shadow: 10px 10px 25px rgb(127, 127, 127, 0.5);
}

.block_image {
    width: 100%;
    box-sizing: border-box;
}

.block_image img {
    width: 100%;
    height: 100%;
    max-height: 250px;
}

.card_block div {
    padding: 5px;
}

.btn_buy {
    margin: 15px auto;
}

.btn_buy a {
    text-decoration: none;
    font-size: 15px;
    color: #fff;
    background-color: #DF1D1D;
    border: 3px solid #DF1D1D;
    padding: 8px 22px;
    cursor: pointer;
    transition: all 0.3s;
} 

.btn_buy a:hover {
    background-color: #ffffff;
    color: #DF1D1D;
}









.item_category {
    width: 280px;
    min-height: 280px;
    margin: 45px auto;
    border-radius: 50px;
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 10px 10px 25px rgb(127, 127, 127, 0.5);
    cursor: pointer;
}

.item_category a {
    display: block;
    text-align: center;
    border: 5px solid #ffffff;
    background-color: rgba(29, 29, 29, 0.5);
    font-size: 32px;
    padding: 5px 15px;
    margin: auto;
    color: #ffffff;
    font-weight: bold;
    transform: translateY(150%);
    text-decoration: none;
    transition: 0.3s;
    opacity: 0;
}

.item_category:hover a {
    opacity: 1;
}