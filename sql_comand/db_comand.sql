-- создаем базу данных для нашего интернет-магазина
CREATE DATABASE website_carabin;

-- первая таблица категории, в ней хранятся id какатегорий, их названия и url, который будет подставляться в background url, эти url берутся из папки img_cat в папке images
CREATE TABLE categories(
	id int NOT null PRIMARY KEY AUTO_INCREMENT,
    name_cat varchar(100),
    cat_url varchar(100)
);

-- добавляем 8 категорий в первую таблицу
INSERT INTO `categories`(`id`, `name_cat`, `cat_url`) VALUES (1,'Одежда','clothes.webp');
INSERT INTO `categories`(`id`, `name_cat`, `cat_url`) VALUES (2,'Посуда','cookware.webp');
INSERT INTO `categories`(`id`, `name_cat`, `cat_url`) VALUES (3,'Снаряжение','equipment.jpg');
INSERT INTO `categories`(`id`, `name_cat`, `cat_url`) VALUES (4,'Веревки','rope.jpeg');
INSERT INTO `categories`(`id`, `name_cat`, `cat_url`) VALUES (5,'Наборы','sets.jpg');
INSERT INTO `categories`(`id`, `name_cat`, `cat_url`) VALUES (6,'Обувь','shoes.jpg');
INSERT INTO `categories`(`id`, `name_cat`, `cat_url`) VALUES (7,'Спальники','sleepbag.jpg');
INSERT INTO `categories`(`id`, `name_cat`, `cat_url`) VALUES (8,'Палатки','tents.jpg');

-- создаем таблицу всех продуктов

CREATE TABLE products(
	id varchar(100) PRIMARY KEY,
    id_cat int,
    name_product varchar(200),
    product_url varchar(2000),
    popular boolean,
    new boolean,
    price int, 
    about varchar(3000),
    produser varchar(500)
);

-- вставляем продукты в таблицу products
-- используем папку to_db

-- создаем таблицу для заказов

CREATE TABLE oders(
	num_oder int(20) NOT null PRIMARY KEY,
    fname varchar(100),
    lname varchar(100),
    phone varchar(11),
    price int,
    name_prod_count varchar(1000)
);




