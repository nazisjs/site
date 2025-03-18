let nav = document.querySelector('nav ul');
let icons = document.querySelector('.icons')

function func() {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        icons.style.display = 'none';

    } else {
        nav.style.display = 'flex';
        icons.style.display = 'flex';
    }
}
