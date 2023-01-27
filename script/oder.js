class Oder{
    constructor(fname, lname, phone, price, products){
        this.fname = fname,
        this.lname = lname,
        this.phone = phone,
        this.price = price,
        this.products = products
    }
}

// вешаем событие на кнопку Заказать
document.querySelector('form button').addEventListener('click', (event) => {
    event.preventDefault();
    let form = document.querySelector('.block_form form');
    let price = document.querySelector('.price m').innerHTML;
    let products = check_local();
    if(check_form(form) && products != false){
        let oder = new Oder(form.elements.fname.value, form.elements.lname.value, form.elements.phone.value, Number(price), products);
        send_oder(JSON.stringify(oder));
        clear_form(form);
        clear_from_products();
    }
});

// ф-ия проверяет заполненность всех полей формы
function check_form(elem){
    if(elem.elements.fname.value == '' || elem.elements.lname.value == '' || elem.elements.phone.value == ''){
        alert('Заполните все поля формы!');
    } else if(elem.elements.phone.value.length == 11){
        return true;
    } else {
        alert('8888');
    }
}

// получаем товары из localhost, чтобы потом использовать их при создании заказа
function check_local(){
    let basket = JSON.parse(localStorage.basket);
    for (const key in basket) {
        if(basket[key] != undefined){
            return basket;
        }
    }
    alert('Добавьте товар в козину, чтобы оформить заказ!');
    return false;
}

// ф-ия делает запрос на сервер, чтобы сохранить заказ в базе данных
async function send_oder(oder){
    await fetch(`http://localhost:3000/page/?oder=${oder}`)
        .then(data => data.text())
        .then(data => {
            document.querySelector('.popap').style.display = 'flex';
            document.querySelector('.text').innerHTML = data;
        })
}

// ф-ия очищает поля формы
function clear_form(form){
    form.elements.fname.value = '';
    form.elements.lname.value = '';
    form.elements.phone.value = '';
}

// ф-ия очищает блок с заказами и localstorage
function clear_from_products(){
    let basket = JSON.parse(localStorage.basket);
    basket = {};
    localStorage.basket = JSON.stringify(basket);
    document.querySelector('.block_oders').innerHTML = '';
    document.querySelector('.price m').innerHTML = '0';
}




