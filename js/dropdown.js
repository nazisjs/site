document.addEventListener("DOMContentLoaded", () => {
    let drop = document.querySelectorAll(".pluss");
    let texts = document.querySelectorAll(".text2");

    drop.forEach((drops, index) => {
        drops.addEventListener("click", () => {
            let textElement = texts[index];

            if (window.getComputedStyle(textElement).display === "none") {
                textElement.style.display = "block";
            } else {
                textElement.style.display = "none";
            }
        });
    });
});
