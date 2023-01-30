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
