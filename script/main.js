// ф-ия получает категории из бд
async function get_categories(){
    await fetch('http://localhost:3000/?products=cats')
    .then(data => data.json())
    .then(data => {
        create_card_cat(data);
    });
}

// ф-ия получает популярные товары из бд
async function get_pop_product(){
    await fetch('http://localhost:3000/?products=pop')
    .then(data => data.json())
    .then(data => {
        create_card_prod(data, 'block_popular');
    });
}

// ф-ия получает новые товары из бд
async function get_new_product(){
    await fetch('http://localhost:3000/?products=new')
    .then(data => data.json())
    .then(data => {
        create_card_prod(data, 'block_new');
    });
}

// ф-ия создает карточку категории
function create_card_cat(cats){
    for (const el of cats) {
        document.querySelector('.block_catalog').innerHTML += `<div style="background: url('./images/img_cat/${el.cat_url}');" class="item_category"><a href="/page/catalog.html?categories=${el.id}"> ${el.name_cat} </a></div>`;
    }
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
        `;
    }
}

// ф-ия отправляет название продукта в localStorage, чтобы потом, когда пользователь перейдет на product.html, взять эти данные, сделать запрос в бд, получить ответ и вывести его в виде искомого товара
function send_name_prod(name){
    localStorage.setItem('name_product', name);
}

get_categories();
get_pop_product();
get_new_product();

