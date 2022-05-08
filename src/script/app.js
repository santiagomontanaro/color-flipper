const colors = ['red', 'blue', 'yellow', 'orange', 'pink', 'cyan', '#F1f5f8', '#3d5a80', '#e0fbfc', 'gray', 'rgb(118,181,197)', 'rgb(191, 15, 130)', 'rgb(201, 13, 222)', 'hsl(209, 100%, 82%)', 'hsla(132, 100%, 76%, 1)', 'hsla(246, 100%, 76%, 1)'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
var main = document.getElementsByClassName('main');

btn.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * colors.length);
    color.textContent = colors[randomNumber].toUpperCase();
    color.style.color = colors[randomNumber];
    main[0].style.backgroundColor = colors[randomNumber];
});
