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
                        <div class="price"><p>${el[key]['price']}  руб</p></div>
                    </div>
                    <div class="btn">
                        <button onclick="remove_oder('${key}')" class="btn_remove">Удалить</button>
                    </div
                </div>
            </div>
        `;
        get_sum(el[key]['price']);
    }
}

// ф-ия удаляет указан
function remove_oder(el){
    let basket = JSON.parse(localStorage.basket);
    delete basket[el]; 
    localStorage.basket = JSON.stringify(basket);
    check_basket();
}

function get_sum(el){
    let sum = 0;
    for (const key in el) {
        sum += el[key]['price'];
    }
    document.querySelector('m').innerHTML = sum;
}

check_basket();