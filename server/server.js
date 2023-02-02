const express = require('express');
const app = express();
const cors = require('cors');
const parser = require('body-parser');
let json_parser = parser.json();
const pool = require('./db.js');

// ф-ия создает номер заказа
function create_num_oder(){
    return Math.floor(Math.random()*99999999);
}

// ф-ия превращает св-во products заказа в строку, которая будет записываться в бд
function create_str_prod(prods){
    let str = '';
    for (const key in prods) {
        str += key;
        for (const k in prods[key]) {
            if(prods[key].count){
                str += ' - ' + prods[key].count + '; ';
                break;
            }
        }
    }
    return str;
}

app.use(cors({
    origin: '*'
}));

app.get('/', json_parser, (req, res) => {
    switch (req.query.products) {
        case 'cats':
            pool.query('SELECT * FROM categories;', (error, result) => {
                if (error) throw error;
                res.send(result);
            });
            break;
        case 'pop':
            pool.query('SELECT * FROM products  WHERE popular = true;', (error, result) => {
                if (error) throw error;
                res.send(result);
            });
            break;
        case 'new':
            pool.query('SELECT * FROM products  WHERE new = true;', (error,result) => {
                if (error) throw error;
                res.send(result);
            });
            break;
    
        default:
            break;
    }
});

app.get('/page/', json_parser, (req, res) => {

    if(req.query.categories){
        switch (req.query.categories) {
            case 'all':
                pool.query('SELECT * FROM categories', (error,result) => {
                    res.send(result);
                });
                break;
            case req.query.categories:
                pool.query(`SELECT * FROM products WHERE id_cat = ${req.query.categories}`, (error,result) => {
                    res.send(result);
                });
                break;
        
            default:
                break;
        }
    } else if(req.query.products){
        switch (req.query.products) {
            case 'all':
                pool.query('SELECT * FROM products', (error,result) => {
                    res.send(result);
                });
                break;
        
            default:
                break;
        }
    } else if(req.query.id){
        switch (req.query.id) {
            case req.query.id:
                pool.query(`SELECT * FROM products WHERE id = '${req.query.id}'`, (error,result) => {
                    if(result.length > 0){
                        res.send(result);
                    } else {
                        res.send('Данного товара нет!');
                    }
                });
                break;
        
            default:
                break;
        }
    } else if(req.query.oder){
        let oder = JSON.parse(req.query.oder);
        let num_oder = create_num_oder(); // номер заказа
        let name_prod_count = create_str_prod(oder.products); // строка с товарами и их количеством

        pool.query(`INSERT INTO oders(num_oder, fname, lname, phone, price, name_prod_count) VALUES (${num_oder},'${oder.fname}','${oder.lname}','${oder.phone}',${oder.price},'${name_prod_count}')`, (error,result) => {
            if (error) throw error;
            res.send(`Номер вашего заказ - ${num_oder}. <br> Когда он будет готов, наши менеджеры свяжутся с вами!`);
        });
    }

});

app.listen('3000', (err, res) => {
    if(err){
        console.log(err);
    } else {
        console.log('Server work');
    }
});
