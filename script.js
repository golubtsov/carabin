/* ====================================== MENU ================================== */

const adaptive_btn_menu = document.querySelector('.adaptive_btn');
const adaptive_menu = document.querySelector('.adaptive_menu');

adaptive_btn_menu.addEventListener('click', function(e){
    if (adaptive_menu.style.display == 'none'){
        adaptive_menu.style.display = 'block';
    } else {
        adaptive_menu.style.display = 'none';
    }
});

/* ====================================== CATEGORIES ================================= */

// const categories = document.querySelector('.text');
// const block_category_links = document.querySelector('.category_links');

// categories.addEventListener('click', function(){
//     console.log(true);
//     if (block_category_links.style.display == 'none'){
//         block_category_links.style.display = 'block';
//     } else {
//         block_category_links.style.display = 'none';
//     }
// });

/* ====================================== CLEAR BASKET =============================== */

const bnt_clear = document.querySelector('.btn_clear');
const block_oders = document.querySelector('.block_oders');

bnt_clear.addEventListener('click', () => {
    block_oders.innerHTML = '';
});



