const mobileToggle = document.querySelector('#mobile_menu')
const nav = document.querySelector('.nav-flex')
const bodyfixed = document.querySelector('body')

// Display mobile menu

const mobilemenu = () => {
    mobileToggle.classList.toggle('toggle-menu');
    nav.classList.toggle('toggle');
    bodyfixed.classList.toggle('static');
  };
  
  mobileToggle.addEventListener('click', mobilemenu);