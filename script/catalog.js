// ========== СПИСОК КАТЕГОРИЙ НА СТР catalog.html ==========

// блок категорий
const block_item = document.querySelector('.block_item');
// кнопка, при нажатии на которую будет появляться список категорий
const btn_adaptive = document.querySelector('.btn-adaptive');
btn_adaptive.addEventListener('click', adapt_cats);

function adapt_cats(){
    if(block_item.classList.contains('active')){
        close_cat();
    } else {
        watch_cat();
    }
}

function watch_cat(){
    block_item.classList.add('active');
        block_item.style.display = 'flex';
        block_item.style.height = block_item.scrollHeight + 'px';
        setTimeout(() => {
            block_item.style.opacity = 1;
        }, 400);
}

function close_cat(){
    block_item.classList.remove('active');
        block_item.style.opacity = 0;
        setTimeout(() => {
            block_item.style.height = 0;
        }, 400);
        setTimeout(() => {
            block_item.style.display = 'none';
        }, 700);
}

// ========================================

// ф-ия получает категории из бд
async function get_categories(){
    await fetch('http://localhost:3000/page/?categories=all')
    .then(data => data.json())
    .then(data => {
        create_card_cat(data);
    });
}

// ф-ия получает товары из бд
async function get_products(){
    let param = decodeURIComponent(window.location.search);
    let url = `http://localhost:3000/page/${param}`;
    await fetch(url)
    .then(data => data.json())
    .then(data => {
        create_card_prod(data, 'block_products');
    });
}

// ф-ия создает карточку товара
function create_card_prod(criterion, block){
    for (const el of criterion) {
        document.querySelector(`.${block}`).innerHTML += `
        <div class="card_block">
            <div class="block_image">
                <img src="${el.product_url}">
            </div>
            <div class="product_name">${el.name_product}</div>
            <div class="product_maker">${el.produser}</div>
            <div class="product_price"><b>${el.price} руб</b></div>
            <div class="btn_buy"><a href="/page/product.html?id=${el.id}">Подробнее</a></div>
        </div>
        `
    }
}

// ф-ия создает кнопки категории из бд для страницы catalog.html
function create_card_cat(cats){
    for (const el of cats) {
        document.querySelector('.block_item').innerHTML += `<div class="item"><a href="/page/product.html" data-id="${el.id}">${el.name_cat}</a></div>`;
    }
    get_link();
}

// ф-ия переберает ссылки категорий и вешает на них событие
function get_link(){
    let links = document.querySelectorAll('.item a');
    for (const el of links) {
        el.addEventListener('click', get_by_cat);
    }
}

// при клике на категорию на странице catalog.html запускается эта ф-ия, которая отправляет запрос на получение товаров из этой категории
function get_by_cat(event){
    document.querySelector('.block_products').innerHTML = '';
    event.preventDefault();
    sort_by_cat(this.dataset.id);
}

async function sort_by_cat(val){
    await fetch(`http://localhost:3000/page/?categories=${val}`)
    .then(data => data.json())
    .then(data => {
        create_card_prod(data, 'block_products');
    });
}

get_categories();
get_products();


