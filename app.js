// hamburger menu 

const hamburger = document.querySelectorAll('.toggle__btn')[0];
const close = document.querySelectorAll('.toggle__btn')[1];
const navigation = document.querySelector('.header__nav .nav__ul');

hamburger.addEventListener('click', ()=>{
    navigation.classList.toggle('show');
    navigation.classList.remove('hide')
    hamburger.classList.toggle('hide');
    close.classList.toggle('hide');
})

close.addEventListener('click', ()=>{
    navigation.classList.toggle('hide')
    navigation.classList.remove('show')
    hamburger.classList.toggle('hide')
    close.classList.toggle('hide')
})