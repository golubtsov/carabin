// ф-ия проверяет наличие товаров в localStorage.basket
function check_basket(){
    let basket = JSON.parse(localStorage.basket);
    create_card_oder(basket);
    get_sum(basket);
}

// ф-ия создает карточки товаров
function create_card_oder(el){
    document.querySelector('.block_oders').innerHTML = '';
    for (const key in el) {
        document.querySelector('.block_oders').innerHTML += `
            <div class="oder">
                <div class="oder_img">
                    <img src="${el[key]['url']}">
                </div>
                <div class="about_oder">
                    <div>
                        <div class="name"><p>${key}</p></div>
                        <div class="blc-count">
                            <button class="minus" data-key="${key}">-</button>
                            <p class="count">${el[key]['count']}</p>
                            <button class="plus" data-key="${key}">+</button>
                        </div>
                        <div class="price"><p>${el[key]['price']*el[key]['count']}  руб</p></div>
                    </div>
                    <div class="btn">
                        <button onclick="remove_oder('${key}')" class="btn_remove">Удалить</button>
                    </div
                </div>
            </div>
        `;
        get_sum(el[key]['price']);
    }
    get_listener(); // 
}

// ф-ия получает данные в localStorage
function get_local(){
    let basket = JSON.parse(localStorage.basket);
    return basket;
}

// ф-ия отправляет данные в localStorage
function send_local(el){
    localStorage.basket = JSON.stringify(el);
}

// ф-ия вешает события на все кнопки
function get_listener(){
    const btns_minus = document.querySelectorAll('.minus');
    for (const el of btns_minus) {
        el.addEventListener('click', minus);
    }
    const btns_plus = document.querySelectorAll('.plus');
    for (const el of btns_plus) {
        el.addEventListener('click', plus);
    }
}

// ф-ия уменьшает кол-во выбранного товара на 1
function minus(){
    let bas = get_local();
    for (const k in bas) {
        if(k == this.dataset.key){
            if(bas[k]['count'] != 1){
                bas[k]['count']--;
                break;
            }
        }
    }
    send_local(bas);
    check_basket();
}

// ф-ия увеличивает кол-во выбранного товара на 1
function plus(){
    let bas = get_local();
    for (const k in bas) {
        if(k == this.dataset.key){
            if(bas[k]['count'] != 10){
                bas[k]['count']++;
                break;
            } else {
                document.querySelector('.popap').style.display = 'flex';
                document.querySelector('.text').innerHTML = `Максимальное количество одного вида товаров в одном заказе!`;
            }
        }
    }
    send_local(bas);
    check_basket();
}

// ф-ия удаляет указанный товар
function remove_oder(el){
    let basket = JSON.parse(localStorage.basket);
    delete basket[el]; 
    localStorage.basket = JSON.stringify(basket);
    check_basket();
}

// ф-ия считает сумму всез заказов
function get_sum(el){
    let sum = 0;
    for (const key in el) {
        sum += el[key]['price']*el[key]['count'];
    }
    document.querySelector('m').innerHTML = sum;
}

check_basket();