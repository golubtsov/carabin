// класс, на основе которого будут создаваться и добавляться продукты в localStorage.basket
class Product{
    constructor(name, url, price, count = 1){
        this.name = name,
        this.url = url,
        this.price = price,
        this.count = count
    }
}

// ф-ия добавляет товары в localStorage.basket
function add_basket(elem){
    let product = new Product(elem.name_product, elem.product_url, elem.price);
    let basket = JSON.parse(localStorage.basket);
        basket[product.name] = {
            'url': product.url,
            'price': product.price,
            'count': product.count
        };
        alert('Товар добавлен в корзину!');
    localStorage.basket = JSON.stringify(basket);
}
