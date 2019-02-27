const products = [
    {id: 1, title: 'Notebook', price: 2000, quantity: 5},
    {id: 2, title: 'Mouse', price: 20, quantity: 5},
    {id: 3, title: 'Keyboard', price: 200, quantity: 5},
    {id: 4, title: 'Gamepad', price: 50, quantity: 5},
    {id:5, title: 'CompTable', price:10, quantity: 0},
    {id: 6, quantity: 0},
];

const renderProduct = (title = "Товар", price = 0, quantity = 0) => {
    return `
            <div class="product-item" style="width: 100px;">  
                <h3>${title}</h3>
                <p>${price}</p>
                <p>Доступно:<br> ${quantity}</p>
                <button class="buy-btn" style="float: right; border-radius:5px;">Купить</button>
            </div>`
};
const renderPage = list => {
    const soldProductText = "SOLD"; //Значение, если товара нет
    const productsList = list.map(item => {
        if (item.quantity !== 0) {
            return renderProduct(item.title, item.price, item.quantity)
        } else {
            return renderProduct(item.title, item.price, soldProductText);
        }
    });
    document.querySelector('.products').innerHTML = productsList.join('');
};
renderPage(products);
//добавление стилей через .style
document.querySelector('.main-menu').style.display = "flex";
document.querySelector('.main-menu').style.justifyContent = "flex-end";
document.querySelector('.main-menu').style.backgroundColor = "lightgrey";
document.querySelector('.main-menu').style.height = "40px";
document.querySelector('.main-menu').style.width = "800px";
document.querySelector('.main-menu').style.margin = "0 auto";
document.querySelector('.products').style.display = "flex";
document.querySelector('.products').style.justifyContent = "space-between";
document.querySelector('.products').style.width = "800px";
document.querySelector('.products').style.margin = "0 auto";

