const btn_menu = document.querySelector('.btn-scroll');
const blc_items = document.querySelector('.blc-items');
btn_menu.addEventListener('click', check_manu);

function check_manu(){
    if(!btn_menu.classList.contains('active')){
        btn_menu.classList.add('active');
        get_menu()
    } else if(btn_menu.classList.contains('active')){
        btn_menu.classList.remove('active');
        close_manu()
    }
}

function close_manu(){
    blc_items.style.opacity = 0;
    blc_items.style.height = 0;
    setTimeout(() => blc_items.style.display = 'none', 500);
}

function get_menu(){
    blc_items.style.display = 'block';
    blc_items.style.height = blc_items.scrollHeight + 'px';
    blc_items.style.opacity = 1;
}

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