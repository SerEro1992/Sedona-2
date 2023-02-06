

let burgerButtonOpen = document.querySelector('.burger-button');
let burgerMenuClose = document.querySelector('.header__menu-close-button');
let burgerMenu = document.querySelector('.header');

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};
const isEnterKey = (evt) => {
  return evt.key === 'Enter';
};

const onBurgerEscKeydown = (evt)  =>{
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBurgerMenu();
  }
};



function openBurgerMenu(){
  burgerMenu.classList.add('burger-button-press');

  document.addEventListener('keydown', onBurgerEscKeydown);
}

function closeBurgerMenu(){
  burgerMenu.classList.remove('burger-button-press')

  document.removeEventListener('keydown', onBurgerEscKeydown);
}


burgerButtonOpen.addEventListener('click', (evt) => {
  openBurgerMenu();
});

burgerButtonOpen.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openBurgerMenu();
  }
});

burgerMenuClose.addEventListener(('click') , () => {
  closeBurgerMenu();
}
)

burgerMenuClose.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeBurgerMenu();
  }
});
