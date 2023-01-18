<?php
    header('content-type: text/css');
?>

@import url('https://fonts.googleapis.com/css2?family=Norican&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bona+Nova:ital@1&family=Italianno&display=swap');

* {
    margin: 0;
    font-family: 'Norican', sans-serif;
}

/* ===================================== MENU =============================== */

.wrapper {
    width: 100%;
}

.menu {
    width: 100%;
    display: flex;
    background-color: #000000;
    font-family: 'Norican', sans-serif;
}

.menu ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.blockLogo {
    width: 10%;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 16px;
    padding: 10px 25px;
    margin-left: 30px;
}

.blockLink {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: aquamarine;
}

.blockLink li {
    margin: 15px;
}

.blockLink a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    padding: 19px 30px;
    margin: 0px 12px;
    transition: all 0.2s ease-in;
}

.blockLink a:hover {
    background-color: #d21616;
}

.blockOrder {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.blockOrder ul {
    list-style-type: none;
}

.blockOrder li {
    margin: 15px;
}

.blockOrder a {
    width: 100px;
    font-size: 18px;
    text-decoration: none;
    color: black;  
    background-color: #FAFF00;
    padding: 5px 15px;     
    border-radius: 5px;
}

/* ============================== SCREENSAVER =================================== */

.screensaver {
    width: 100%; 
    max-height: 800px;
    background-image: url('../images/main.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-sizing: border-box;
}

.mainTitle {
    line-height: 800px;
    text-align: center;
    font-size: 96px;
    color: #ffffff;
    text-shadow: 3px 3px 3px #111111;
    font-family: 'Bona Nova', serif;
}


/* ================================= BLOCK_TITLE ========================================= */

.block_title {
    width: 100%;
    text-align: center;
    background-color: #EEEEEE;
}

.title {
    font-size: 32px;
    padding: 15px;
}

/* ================================  BLOCK_CATALOG ============================================== */

.grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.item_category {
    width: 280px;
    min-height: 280px;
    margin: 45px auto;
    background-color: rgb(127, 127, 127);
    border-radius: 50px;
    text-align: center;
}

/* =============================== BLOCK_TITLE_2 ================================================= */

.block_title_2 {
    width: 100%;
    background-color: #EEEEEE;
    border-bottom: 1px solid #292929;
}

.title_2 {
    margin-left: 40px;
    font-size: 32px;
    padding: 15px;
}

.card_product {
    width: 280px;
    min-height: 400px;
    margin: 45px auto;
    background-color: rgb(127, 127, 127);
    text-align: center;
}

/* ================================ FOOTER ======================================================= */

footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    min-height: 100px;
    background-color: #000000;
    color: white;
}

.soc_network {
    width: 50%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.soc_net {
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    text-align: center;
    line-height: 64px;
    cursor: pointer;
    transition: 0.3s;
}

.soc_net:hover {
    transform: scale(0.95);
}

.inst {
    width: 64px;
    height: 64px;
    background-image: url('../images/instagram.png');
    background-size: cover;
}

.vk {background-image: url('../images/telegram.png');}

.telega {background-image: url('../images/vk.png');}

.number_phone, .adres {
    text-align: center;
    font-size: 16px;
    padding: 8px;
}

.adres a {
    text-decoration: none;
    color: #EEEEEE;
    margin: 20px;
}

.adres a:hover {
    text-decoration: underline;
}

.number_phone p, .adres a {padding: 5px;}





