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
	id int NOT null PRIMARY KEY AUTO_INCREMENT,
    name_cat varchar(50),
    name_product varchar(100),
    product_url varchar(50),
    popular boolean,
    new boolean,
    price int, 
    about varchar(500),
    produser varchar(500)
);

-- вставляем продукты в таблицу products

INSERT INTO `products`(`id`, `name_cat`, `name_product`, `product_url`, `popular`, `new`, `price`, `about`, `produser`) VALUES (1,'Посуда','Набор посуды easy Camp Adventure Cook Set','https://images-na.ssl-images-amazon.com/images/I/51U7sobg2hL._SL250_.jpg',true,false,2999,'text about','producer');

INSERT INTO `products`(`id`, `name_cat`, `name_product`, `product_url`, `popular`, `new`, `price`, `about`, `produser`) VALUES (2,'Снаряжение','Снаряжение','https://avatars.mds.yandex.net/get-mpic/96484/img_id2350585491181717712/6hq',true,true,6799,'text about','producer');

INSERT INTO `products`(`id`, `name_cat`, `name_product`, `product_url`, `popular`, `new`, `price`, `about`, `produser`) VALUES (3,'Посуда','Рюкзак для пикника Гурман на 4 персоны','https://illan-gifts.ru/api/images/riukzak-dlia-piknika-gurman-na-4-persony-s-holodilnym-otdeleniem-63428.jpeg',false,false,1999,'text about','producer');

INSERT INTO `products`(`id`, `name_cat`, `name_product`, `product_url`, `popular`, `new`, `price`, `about`, `produser`) VALUES (4,'	
Палатки','Палатка Pinguin AERO 3','https://diamondelectric.ru/images/2469/2468506/palatka_pinguin_aero_3_1.jpg',false,false,7889,'text about','producer');

INSERT INTO `products`(`id`, `name_cat`, `name_product`, `product_url`, `popular`, `new`, `price`, `about`, `produser`) VALUES (5,'	
Наборы','Набор для выживания (a-rs028)','https://avatars.mds.yandex.net/i?id=1ef2b825e8a183aaca8f43350eb44a46_sr-5301392-images-thumbs&n=13',true,false,3599,'text about','producer');

INSERT INTO `products`(`id`, `name_cat`, `name_product`, `product_url`, `popular`, `new`, `price`, `about`, `produser`) VALUES (6,'Одежда','	
Куртка мужская летняя горная','https:/экипировка.рус/upload/resize_cache/iblock/35b/260_250_140cd750bba9870f18aada2478b24840a/hqa4zmm5zj4wy8bsojmig1zy3lzz4s7c.jpg',true,true,5679,'text about','producer');

INSERT INTO `products`(`id`, `name_cat`, `name_product`, `product_url`, `popular`, `new`, `price`, `about`, `produser`) VALUES (7,'Одежда','	
Куртка мужская летняя горная','https://cdn.shopify.com/s/files/1/0055/1111/8901/products/Outdoor-Sharkskin-TAD-Military-Tactical-Set-Camouflage-Hunting-Clothes-Suits-Waterproof-Men-Jacket-Or-Pants-For_fa59599f-e8e8-4a57-8714-f6aeb33882df_250x_crop_center.jpg?v=1594424912',false,true,7899,'text about','producer');

INSERT INTO `products`(`id`, `name_cat`, `name_product`, `product_url`, `popular`, `new`, `price`, `about`, `produser`) VALUES (8,'Одежда','Одежда Alaska Elk','https://adventurica.ru/media/thumbnail/product/22860/22860_1_250x250.jpg',true,false,3299,'text about','producer');

INSERT INTO `products`(`id`, `name_cat`, `name_product`, `product_url`, `popular`, `new`, `price`, `about`, `produser`) VALUES (9,'	
Веревки','	
Веревки','https://avatars.mds.yandex.net/get-mpic/5163819/img_id6155368162513957586.jpeg/6',false,true,4189,'text about','producer');

INSERT INTO `products`(`id`, `name_cat`, `name_product`, `product_url`, `popular`, `new`, `price`, `about`, `produser`) VALUES (10,'Веревка репшнур','https://th.bing.com/th/id/OIP.1hcpdQbISgYqMSjySxL5UgAAAA?pid=ImgDet&rs=1',true,false,3399,'text about','producer');

INSERT INTO `products`(`id`, `name_cat`, `name_product`, `product_url`, `popular`, `new`, `price`, `about`, `produser`) VALUES (11,'	
Наборы','	
Тревожный рюкзак выживальщика','https://cdn1.ozone.ru/s3/multimedia-e/c250/6042569546.jpg',true,false,5699,'text about','producer');

-- создаем таблицу для заказов

CREATE TABLE oders(
	num_oder int(20) NOT null PRIMARY KEY,
    fname varchar(100),
    lname varchar(100),
    phone varchar(11),
    price int,
    name_prod_count varchar(1000)
);




