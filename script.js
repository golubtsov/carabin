/*  CLEAR BASKET  */

const bnt_clear = document.querySelector('.btn_clear');
const block_oders = document.querySelector('.block_oders');

bnt_clear.addEventListener('click', () => {
    block_oders.innerHTML = '';
});



