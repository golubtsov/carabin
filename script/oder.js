class Oder{
    constructor(fname, lname, phone, products){
        this.fname = fname,
        this.lname = lname,
        this.phone = phone,
        this.products = products
    }
}

// вешаем событие на кнопку Заказать
document.querySelector('form button').addEventListener('click', (event) => {
    event.preventDefault();
    let form = document.querySelector('.block_form form');
    let products = check_local();
    if(check_form(form) && products != false){
        let oder = new Oder(form.elements.fname.value, form.elements.lname.value, form.elements.phone.value == '', products);
        console.log(oder);
    }
});

// ф-ия проверяет заполненность всех полей формы
function check_form(elem){
    if(elem.elements.fname.value == '' || elem.elements.lname.value == '' || elem.elements.phone.value == ''){
        alert('Заполните все поля формы!');
    } else {
        return true;
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




