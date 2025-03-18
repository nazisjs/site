document.querySelectorAll('.order').forEach(btn => {
    btn.addEventListener("click", function () {
        const product = this.closest('.products');
        const id = product.dataset.id;
        const image = product.dataset.image;
        const price = product.dataset.price;
        const name = product.dataset.name;

        let cart = localStorage.getItem('carts');
        if (cart) {
            try {
                cart = JSON.parse(cart);
                if (!Array.isArray(cart)) {
                    cart = [];
                }
            }
            catch (error) {
                cart = [];
            }
        }
        else {
            cart = [];
        }
        cart.push({ id, name, price, image });

        localStorage.setItem('carts', JSON.stringify(cart));
        alert(name + " added");

        // Вызов обновления корзины
        displayCart();
    });
});



// Функция отображения корзины
function displayCart() {
    const cartitem = document.getElementById('cart-items');
    let cart = localStorage.getItem('carts');
    if (cart) {
        cart = JSON.parse(cart);
    }
    else {
        cart = [];
    }
    cartitem.innerHTML = '';

    if (cart.length > 0) {
        cart.forEach(function (item) {
            const div = document.createElement('div');
            div.classList.add('cart-product');

            const img = document.createElement('img');
            img.src = item.image;
            img.classList.add('cart-img');

            const p = document.createElement('p');
            p.textContent = `${item.name} - ${item.price}$`;

            div.appendChild(img);
            div.appendChild(p);
            cartitem.appendChild(div);
        });
    }
    else {
        const p = document.createElement('p');
        p.textContent = "Empty";
        cartitem.appendChild(p);
    }
}

// Вызываем отображение корзины при загрузке страницы
displayCart();
