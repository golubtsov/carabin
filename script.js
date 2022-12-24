document.querySelector('.adaptive_btn').addEventListener('click', function(e){
    if (document.querySelector('.adaptive_menu').style.display == 'none'){
        document.querySelector('.adaptive_menu').style.display = 'block';
    } else {
        document.querySelector('.adaptive_menu').style.display = 'none';
    }
})