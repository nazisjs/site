let scrollbar = document.querySelector('.gw')
let backbtn = document.getElementById('leftBtn')
let nextbtn = document.getElementById('rightBtn')


nextbtn.addEventListener("click", () => {
    scrollbar.style.scrollBehavior = "smooth";
    scrollbar.scrollLeft += 900;
})

backbtn.addEventListener("click", () => {
    scrollbar.scrollLeft -= 900;
})
