const adaptive_btn_menu = document.querySelector('.adaptive_btn');
const adaptive_menu = document.querySelector('.adaptive_menu');

adaptive_btn_menu.addEventListener('click', function(e){
    if (adaptive_menu.style.display == 'none'){
        adaptive_menu.style.display = 'block';
    } else {
        adaptive_menu.style.display = 'none';
    }
});

// const btns_products = document.querySelectorAll('.item');

// for (let index = 0; index < btns_products.length; index++) {
//     btns_products[index].addEventListener('click', get_active);
// }

// function get_active(){
//     console.log(this.classList.contains('active'));
// }

const categories = document.querySelector('.text');
const block_category_links = document.querySelector('.category_links');

categories.addEventListener('click', function(){
    console.log(true);
    if (block_category_links.style.display == 'none'){
        block_category_links.style.display = 'block';
    } else {
        block_category_links.style.display = 'none';
    }
});
