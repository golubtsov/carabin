let main_img = document.querySelector('.block_img img');
let mini_imgs = document.querySelectorAll('.mini_img img');
for (const el of mini_imgs) {
    el.addEventListener('click', chamge_img);
}

function chamge_img(){
    main_img.src = this.src;
}

function create_about_prod(prod){
    document.querySelector('.block_inform').innerHTML = `
    <div class="block_imgs">
        <div class="block_img">
            <img src="${prod.product_url}"class="prod_img">
        </div>
        <div class="mini_img">
            <img src="${prod.product_url}">
            <img src="${prod.product_url}">
            <img src="${prod.product_url}">
        </div>
    </div>
    <div class="prod_inform">
        <div>
            <h2>${prod.name_product}</h2>
        </div>
        <div>
            <p>${prod.produser}</p>
        </div>
        <div>
            <p>${prod.about}</p>
        </div>
        <div>
            <p>${prod.price} руб</p>
        </div>
        <div class="btn_buy">
            <button class="add_bas">Добавить в корзину</button>
        </div>
    </div>
    `;
    document.querySelector('.add_bas').addEventListener('click', () => {
        add_basket(prod);
    });
}

async function get_info_prod(){
    let param = decodeURIComponent(window.location.search);
    let url = `http://localhost:3000/page/${param}`;
    await fetch(url)
        .then(data => data.json())
        .then(data => {
            create_about_prod(data[0]);
        });
}

get_info_prod();