'use strict';



//Menu SCRIPTS
let menuImg = document.querySelector('.menu_img');
let menuCloseImg = document.querySelector('.img_close_menu');
let darkScene = document.querySelector('.brandDark');
let menu = document.querySelector('.menu');
let content = document.querySelector('.brand')
menuImg.addEventListener('click', function (){
    darkScene.classList.toggle('hidden');
    menu.classList.toggle('hidden');
});
menuCloseImg.addEventListener('click', function (){
    darkScene.classList.add('hidden');
    menu.classList.add('hidden');
});
content.addEventListener('click', function (){
    darkScene.classList.add('hidden');
    menu.classList.add('hidden');
});



