// hamburger menu 
const boddy = document.querySelector('body');
const hamburger = document.querySelectorAll('.toggle__btn')[0];
const closeBtn = document.querySelectorAll('.toggle__btn')[1];
const navigation = document.querySelector('.header__nav .nav__ul');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', ()=>{
    boddy.classList.toggle('no-scroll');
    navigation.classList.toggle('show');
    navigation.classList.remove('hide')
    hamburger.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    overlay.classList.toggle('hide');
})

closeBtn.addEventListener('click', ()=>{
    boddy.classList.toggle('no-scroll');
    navigation.classList.toggle('hide')
    navigation.classList.remove('show')
    hamburger.classList.toggle('hide')
    closeBtn.classList.toggle('hide')
    overlay.classList.toggle('hide')
})


