const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
var main = document.getElementsByClassName('main');

btn.addEventListener('click', function () {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += hexColors[Math.floor(Math.random() * hexColors.length)];
    }
    color.textContent = hex;
    main[0].style.backgroundColor = hex;
})