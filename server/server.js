const express = require('express');
const app = express();
const cors = require('cors');
const parser = require('body-parser');
let json_parser = parser.json();

const pool = require('./db.js');

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
                pool.query(`SELECT * FROM products WHERE id = ${Number(req.query.id)}`, (error,result) => {
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
    } else {
        res.send('Неправильный запрос!');
    }

});

app.listen('3000', (err, res) => {
    if(err){
        console.log(err);
    } else {
        console.log('Server work');
    }
});


// switch (req.query.products) {
//     case 'cats':
//         pool.query('SELECT * FROM categories;', (error, result) => {
//             if (error) throw error;
//             res.send(result);
//         });
//         break;
//     case 'all':
//         pool.query('SELECT * FROM products;', (error, result) => {
//             if (error) throw error;
//             res.send(result);
//         });
//         break;
//     case 'Одежда':
//         pool.query('SELECT * FROM products  WHERE name_cat = "Одежда";', (error,result) => {
//             if (error) throw error;
//             res.send(result);
//         });
//         break;
//     case 'Посуда':
//         pool.query('SELECT * FROM products  WHERE name_cat = "Посуда";', (error,result) => {
//             if (error) throw error;
//             res.send(result);
//         });
//         break;
//     case 'Снаряжение':
//         pool.query('SELECT * FROM products  WHERE name_cat = "Снаряжение";', (error,result) => {
//             if (error) throw error;
//             res.send(result);
//         });
//         break;
//     case 'Веревки':
//         pool.query('SELECT * FROM products  WHERE name_cat = "Веревки";', (error,result) => {
//             if (error) throw error;
//             res.send(result);
//         });
//         break;
//     case 'Наборы':
//         pool.query('SELECT * FROM products  WHERE name_cat = "Наборы";', (error,result) => {
//             if (error) throw error;
//             res.send(result);
//         });
//         break;
//     case 'Обувь':
//         pool.query('SELECT * FROM products  WHERE name_cat = "Обувь";', (error,result) => {
//             if (error) throw error;
//             res.send(result);
//         });
//         break;
//     case 'Спальники':
//         pool.query('SELECT * FROM products  WHERE name_cat = "Спальники";', (error,result) => {
//             if (error) throw error;
//             res.send(result);
//         });
//         break;
//     case 'Палатки':
//         pool.query('SELECT * FROM products  WHERE name_cat = "Палатки";', (error,result) => {
//             if (error) throw error;
//             res.send(result);
//         });
//         break;
//     case '2':
//         pool.query(`SELECT * FROM products  WHERE id = '2';`, (error,result) => {
//             if (error) throw error;
//             res.send(result);
//         });
//         break;
//     default:
//         break;
// }
