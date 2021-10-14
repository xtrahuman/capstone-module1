const mobileToggle = document.querySelector('#mobile_menu')
const nav = document.querySelector('.nav-flex')
const bodyfixed = document.querySelector('body')

// const speakerDetails = [{
//     speakerImg : './public/squaretile.png',
//     speakerName: 'Aliko Dangote',
//     speakerProfile: 'founder and ceo dangote group',
//     profileDetails: 'Lorem ipsum dolnesciunt eius ipsum incidunt nemo commodi laborum porro temporibus laudantium placeat. An'
// }
// ]

// Display mobile menu

const mobilemenu = () => {
    mobileToggle.classList.toggle('toggle-menu');
    nav.classList.toggle('toggle');
    bodyfixed.classList.toggle('static');
  };
  
  mobileToggle.addEventListener('click', mobilemenu);