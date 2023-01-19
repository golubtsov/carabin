<?php
    header('content-type: text/css');
?>

@media screen and (max-width: 2400px) {
    .block_oders {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 1600px) {
    .block_oders {
        grid-template-columns: 1fr;
    }
}

@media screen and (max-width: 1300px) {
    .menu {
        grid-template-columns: 1fr 1fr;
    }

    .blockBtns, .blockOrder {
        display: none;
    }

    .block_adaptive_btn{
        display: block;
    }

    .grid {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .block_products {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .block_item {
        display: none;
    }

    .adaptive_category {
        display: block;
    }
}

@media screen and (max-width: 1100px) {
    footer {
        display: block;
    }

    .soc_network {
        width: 30%;
    }

    .btnOrder {
        width: 30%;
        padding: 20px;
        margin: auto;
    }

    .btnOrder button {
        display: block;
        margin: auto;
    }

    .block_iform {
        display: block;
        grid-template-columns: 1fr;
    }
}

@media screen and (max-width: 900px) {
    .grid {
        grid-template-columns: 1fr 1fr;
    }

    .block_products {
        grid-template-columns: 1fr 1fr ;
    }
}

@media screen and (max-width: 850px) {
    .screensaver {
        width: 100%; 
        max-height: 400px;
        background-image: url('../images/mini.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        box-sizing: border-box;
    }

    .mainTitle {
        line-height: 400px;
        font-size: 48px;
    }
}

@media screen and (max-width: 650px) {
    .grid {
        grid-template-columns: 1fr;
    }

    .block_products {
        grid-template-columns: 1fr;
    }
}

@media screen and (max-width: 450px) {
    .mainTitle {
        line-height: 400px;
        font-size: 32px;
    }
}