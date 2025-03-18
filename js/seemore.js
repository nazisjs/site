let products = document.querySelectorAll('.products2');
let btn = document.querySelector('.seeing');

btn.addEventListener('click', function () {
    products.forEach(product => {
        if (product.style.display === "none" || product.style.display === "") {
            product.style.display = "flex";
            btn.textContent = "See Less"; // Change button text
        } else {
            product.style.display = "none";
            btn.textContent = "See More"; // Change back
        }
    });
});
