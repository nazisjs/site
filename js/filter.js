document.addEventListener("DOMContentLoaded", () => {
    let checkboxes = document.querySelectorAll(".checkboxes"); // Получаем все чекбоксы
    let cards = document.querySelectorAll(".products"); // Получаем все карточки товаров

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("click", () => {
            let selectedFilter = checkbox.getAttribute("data-filter");
            let isChecked = checkbox.querySelector("input").checked; // Проверяем, включен ли чекбокс

            cards.forEach(card => {
                if (card.getAttribute("data-filter") === selectedFilter) {
                    if (isChecked) {
                        card.classList.remove("hide"); // Показываем товар
                    } else {
                        card.classList.add("hide"); // Скрываем товар
                    }
                }
            });
        });
    });
});
