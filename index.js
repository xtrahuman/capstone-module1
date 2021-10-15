const mobileToggle = document.querySelector('#mobile_menu');
const nav = document.querySelector('.nav-flex');
const bodyfixed = document.querySelector('body');
const details = document.querySelector('.speaker-info');

const speakerDetails = [{
  speakerImg: 'public/dangote.jpg',
  speakerName: 'Aliko Dangote',
  speakerProfile: 'founder and ceo dangote group',
  profileDetails: 'a Nigerian business magnate. He is the chairman and CEO of Dangote Group, an industrial conglomerate and the wealthiest person in Africa',
},
{
  speakerImg: 'public/billgate1.jpg',
  speakerName: 'Bill Gate',
  speakerProfile: 'investor and founder of microsoft',
  profileDetails: 'an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft',
},
{
  speakerImg: 'public/zukerburg.jpg',
  speakerName: 'Mark Zuckerberg',
  speakerProfile: 'founder of Facebook',
  profileDetails: 'In December 2015, Zuckerberg and his wife, Priscilla Chan, pledged to give away 99% of their Facebook stake over their lifetimes.',
},
{
  speakerImg: 'public/adenuga.jpg',
  speakerName: 'mike Adenuga',
  speakerProfile: 'founder globalcom',
  profileDetails: 'Adenuga, Nigeria\'s second richest man, built his fortune in telecom and oil production',
},
{
  speakerImg: 'public/otedola.jpg',
  speakerName: 'femi otedola',
  speakerProfile: 'former chairman of Forte Oil PLC',
  profileDetails: 'Otedola is the founder of Zenon Petroleum and Gas Ltd, and the owner of a number of other businesses across shipping, real estate and finance',
},
{
  speakerImg: 'public/philips1.jpg',
  speakerName: 'Charity Philips',
  speakerProfile: 'CEO of Infor',
  profileDetails: 'His charity foundation, which he runs with his wife Karen Phillips and others, has given out over 100 grants since 2016',
},
];

const speakers = () => {
  const speak = speakerDetails.map((speakerDetail) => `
            <div class="row speaker-position col-md-6">
                <div class="speaker-img col-4 col-sm-4">
                    <div class="picture">
                        <img src=${speakerDetail.speakerImg} alt="">
                    </div>
                </div>
                <div class="speaker-details col-8 col-sm-8">
                    <h3>${speakerDetail.speakerName}</h3>
                    <p class="profile">${speakerDetail.speakerProfile}</p>
                    <p class="profile-detail">${speakerDetail.profileDetails}</p>
                </div>

                </div>
            `);

  details.innerHTML = speak.join('');
};

window.addEventListener('DOMContentLoaded', speakers);

// Display mobile menu

const mobilemenu = () => {
  mobileToggle.classList.toggle('toggle-menu');
  nav.classList.toggle('toggle');
  bodyfixed.classList.toggle('static');
};

mobileToggle.addEventListener('click', mobilemenu);