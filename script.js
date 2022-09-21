
const toggle = document.querySelector('#toggle-nav');
const menuHidden = document.querySelector('.menu-hide')

toggle.addEventListener('click', ()=> {
    menuHidden.classList.toggle('d-none');
    menuHidden.style.animation = "fadeIn 1s";
    if(toggle.classList.contains('fa-bars')){
        toggle.classList.remove('fa-bars');
        toggle.classList.add('fa-close');
        }else {
            toggle.classList.remove('fa-close');
            toggle.classList.add('fa-bars');
        }
})