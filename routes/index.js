var CARDS = [
  {
    cssClass: 'bowling-card',
    imgSrc: '/images/gif/bowling.gif',
    link: 'https://plus.google.com/+CraigChamberlin/posts/Leekc8ZWmB2',
    caption: '<i class="fa fa-google-plus"></i>/CraigChamberlin'
  },
  {
    cssClass: 'cat-card',
    imgSrc: '/images/gif/cat.gif',
    link: 'https://plus.google.com/+SergiuGatlan/posts/GuR3WXc384q',
    caption: '<i class="fa fa-google-plus"></i>/SergiuGatlan'
  },
  {
    cssClass: 'rubbish-truck-card',
    imgSrc: '/images/gif/rubbishtruck.gif',
    link: 'https://plus.google.com/+Truthloader/posts/h6Q3BEdnpME',
    caption: '<i class="fa fa-google-plus"></i>/Truthloader'
  },
  {
    cssClass: 'baseball-card',
    imgSrc: '/images/gif/baseball.gif',
    link: 'https://plus.google.com/116747581186148686204/posts/8QF4qdd9F5g',
    caption: '<i class="fa fa-google-plus"></i>/Philosoraptor'
  },
  {
    cssClass: 'poop-card',
    imgSrc: '/images/gif/poop.gif',
    link: 'http://memecrunch.com/meme/AKXO9/boss-makes-a-dollar-i-make-a-dime',
    caption: 'Memecrunch'
  }
];

exports.goodmood = function(req, res) {
  res.render('goodmood', {
    title: '&lsquo;Good Mood&rsquo;',
    separator: '&hearts;',
    customCss: 'goodmood.css',
    card: CARDS[Math.floor(CARDS.length * Math.random())]
  });
};

exports.goodmood_allgifs = function(req, res) {
  res.render('goodmood-allgifs', {
    title: '&lsquo;Good Mood&rsquo;',
    separator: '&hearts;',
    customCss: 'goodmood.css',
    cards: CARDS
  });
};
