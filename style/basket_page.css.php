<?php
    header('content-type: text/css');
?>

@import url('https://fonts.googleapis.com/css2?family=Bona+Nova:ital@1&family=Italianno&family=Roboto:ital,wght@1,100&display=swap');

.block_modal_order .overaly {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color:rgb(219, 219, 219);
    opacity: 0.3;
}

.block_basket {
    width: 100%;
    min-height: 95vh;
}

.basket_title {
    text-align: center;
    padding: 15px;
    font-size: 32px;
    background-color:rgb(219, 219, 219);
}

.block_bascet {
    width: 100%;
    font-size: 24px;
    display: flex;
}

.block_bascet p {padding: 15px 40px;}

.btn_clear {
    width: 32px;
    height: 32px;
    position: absolute;
    right: 40px;
    background-image: url('./images/close.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: all 0.3s;
    cursor: pointer;
}

.btn_clear:hover {
    opacity: 0.6;
}

.block_oders {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.el {
    width: 280px;
    height: 350px;background-color: beige;
    margin: 10px auto;
}

.block_price {
    font-size: 18px;
}

.block_price h3 {padding: 15px 40px;}

.block_form {
    position: relative;
    display: block;
    width: 50%;
    margin: auto;
    margin-bottom: 25px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgb(29,29,29,0.5);
}

.block_form h2 {
    font-size: 28px;
    padding: 15px 40px;
    text-align: center;
}

form {
    width: 80%;
    margin: auto;
}

.block_form p {
    font-size: 20px;
    padding: 8px 40px;
}

.block_form input {
    width: 100%;
    font-size: 20px;
    padding: 5px;
    border-radius: 5px;
}

.block_form button {
    position: relative;
    font-size: 20px;
    color: #fff;
    border: none;
    background-color: #DF1D1D;
    border: 3px solid #DF1D1D;
    padding: 12px 20px;
    text-align: center;
    left: 50%;
    transform: translate(-50%);
    margin-top: 25px;
    margin-bottom: 25px;
    cursor: pointer;
    transition: all 0.3s;
}

.block_form button:hover {
    background-color: #ffffff;
    color: #DF1D1D;
}

b {color: red;}