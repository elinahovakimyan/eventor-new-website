import { FIXED, PER_ADULT, PER_CHILD } from '../../helpers/constants';

export const themedPackage = {
  icon: 'https://previews.123rf.com/images/yganko/yganko1810/yganko181000242/111683763-princess-crown-icon-vector-illustration-.jpg',
  title: 'Princess Party',
  venue: '4teen cafe & restaurant',
  images: [
    {
      original: 'https://www.babysare.com/wp-content/uploads/2019/04/princess-birthday-party-ideas.jpg',
      thumbnail: 'https://www.babysare.com/wp-content/uploads/2019/04/princess-birthday-party-ideas.jpg',
    },
    {
      original: 'https://karaspartyideas.com/wp-content/uploads/2013/03/Daddys-little-PRINCESS-ballerina-themed-birthday-party-via-Karas-Party-Ideas-karaspartyideas.com-ballerina-girl-princess-themed-birthday-party-ruffle-cake-idea-supplies-decor.png',
      thumbnail: 'https://karaspartyideas.com/wp-content/uploads/2013/03/Daddys-little-PRINCESS-ballerina-themed-birthday-party-via-Karas-Party-Ideas-karaspartyideas.com-ballerina-girl-princess-themed-birthday-party-ruffle-cake-idea-supplies-decor.png',
    },
    {
      original: 'http://stevepurkiss.com/wp-content/uploads/2017/11/fresh-design-baby-shower-tea-party-gorgeous-marvellous-theme-83-about-remodel.jpg',
      thumbnail: 'http://stevepurkiss.com/wp-content/uploads/2017/11/fresh-design-baby-shower-tea-party-gorgeous-marvellous-theme-83-about-remodel.jpg',
    },
  ],
  description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque, simul contentiones id sed. Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque, simul contentiones id sed. Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque, simul  id sed.',
};

export const adultMenuOptions = [
  {
    id: 1,
    price: 4000,
    description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
    list: [
      'Pizza Margarita',
      'Pizza Pepperoni',
      'Fresh Garden',
      'Juice',
    ],
    priceType: PER_ADULT,
  },
  {
    id: 2,
    price: 6000,
    description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
    list: [
      'Pizza Margarita',
      'Pizza Pepperoni',
      'Fresh Garden',
      'Juice',
    ],
    priceType: PER_ADULT,
  },
  {
    id: 3,
    price: 7000,
    description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
    list: [
      'Pizza Margarita',
      'Pizza Pepperoni',
      'Fresh Garden',
      'Juice',
    ],
    priceType: PER_ADULT,
  },
];

export const childMenuOptions = [
  {
    id: 1,
    price: 4000,
    description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
    list: [
      'Pizza Margarita',
      'Pizza Pepperoni',
      'Fresh Garden',
      'Juice',
    ],
    priceType: PER_CHILD,
  },
  {
    id: 2,
    price: 6000,
    description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
    list: [
      'Pizza Margarita',
      'Pizza Pepperoni',
      'Fresh Garden',
      'Juice',
    ],
    priceType: PER_CHILD,
  },
  {
    id: 3,
    price: 7000,
    description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
    list: [
      'Pizza Margarita',
      'Pizza Pepperoni',
      'Fresh Garden',
      'Juice',
    ],
    priceType: PER_CHILD,
  },
];

export const decorationOptions = [
  {
    id: 4,
    image: 'https://www.adriatic-explore.com/wp-content/themes/adventure-tours/assets/images/placeholder.png',
    price: 0,
    title: 'No Decoration',
    priceType: FIXED,
  },
  {
    id: 1,
    image: 'https://i.pinimg.com/originals/f6/e4/fe/f6e4fe68f184add4720a2b56eb673571.jpg',
    price: 12000,
    title: 'Table Decoration',
    options: [
      {
        id: 1,
        prividerId: 1,
        providerName: 'CB Decorations',
        image: 'https://i.pinimg.com/originals/f6/e4/fe/f6e4fe68f184add4720a2b56eb673571.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 12000,
        duration: 1,
      },
      {
        id: 3,
        prividerId: 3,
        providerName: 'Memories event planning',
        image: 'https://i.pinimg.com/originals/f6/e4/fe/f6e4fe68f184add4720a2b56eb673571.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 40000,
        duration: 1,
      },
    ],
    priceType: FIXED,
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/originals/f6/e4/fe/f6e4fe68f184add4720a2b56eb673571.jpg',
    price: 20000,
    options: [
      {
        id: 1,
        prividerId: 1,
        providerName: 'CB Decorations',
        image: 'https://i.pinimg.com/originals/f6/e4/fe/f6e4fe68f184add4720a2b56eb673571.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 12000,
        duration: 1,
      },
      {
        id: 3,
        prividerId: 3,
        providerName: 'Memories event planning',
        image: 'https://i.pinimg.com/originals/f6/e4/fe/f6e4fe68f184add4720a2b56eb673571.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 40000,
        duration: 1,
      },
    ],
    title: 'Unique Balloon decoration',
    priceType: FIXED,
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/originals/f6/e4/fe/f6e4fe68f184add4720a2b56eb673571.jpg',
    price: 35000,
    options: [
      {
        id: 1,
        prividerId: 1,
        providerName: 'CB Decorations',
        image: 'https://i.pinimg.com/originals/f6/e4/fe/f6e4fe68f184add4720a2b56eb673571.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 12000,
        duration: 1,
      },
      {
        id: 3,
        prividerId: 3,
        providerName: 'Memories event planning',
        image: 'https://i.pinimg.com/originals/f6/e4/fe/f6e4fe68f184add4720a2b56eb673571.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 40000,
        duration: 1,
      },
    ],
    title: 'Balloon wall',
    priceType: FIXED,
  },
];

export const entertainmentOptions = [
  {
    id: 4,
    image: 'https://www.adriatic-explore.com/wp-content/themes/adventure-tours/assets/images/placeholder.png',
    price: 0,
    title: 'No Entertainment',
    priceType: FIXED,
  },
  {
    id: 1,
    image: 'https://best-shows.com/wp-content/uploads/2014/03/bumaga-0021.jpg',
    title: 'Paper show and an entertainer',
    options: [
      {
        id: 1,
        prividerId: 1,
        providerName: 'Gayluk',
        image: 'https://best-shows.com/wp-content/uploads/2014/03/bumaga-0021.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 12000,
        duration: 1,
      },
      {
        id: 2,
        prividerId: 2,
        providerName: 'Erazanq',
        image: 'https://best-shows.com/wp-content/uploads/2014/03/bumaga-0021.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 10000,
        duration: 1,
      },
      {
        id: 3,
        prividerId: 3,
        providerName: 'Little Einstein',
        image: 'https://best-shows.com/wp-content/uploads/2014/03/bumaga-0021.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 40000,
        duration: 1,
      },
    ],
    priceType: FIXED,
  },
  {
    id: 2,
    image: 'http://app.eventor.am/assets/images/services/game_shows/spaParty_1.jpg',
    price: 20000,
    title: 'Spa Party and an entertainer',
    options: [
      {
        id: 1,
        prividerId: 1,
        providerName: 'Gayluk',
        image: 'http://app.eventor.am/assets/images/services/game_shows/spaParty_1.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 12000,
        duration: 1,
      },
      {
        id: 2,
        prividerId: 2,
        providerName: 'Erazanq',
        image: 'http://app.eventor.am/assets/images/services/game_shows/spaParty_1.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 10000,
        duration: 1,
      },
      {
        id: 3,
        prividerId: 3,
        providerName: 'Little Einstein',
        image: 'http://app.eventor.am/assets/images/services/game_shows/spaParty_1.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 40000,
        duration: 1,
      },
    ],
    priceType: FIXED,
  },
  {
    id: 3,
    image: 'http://app.eventor.am/assets/images/services/cartoon_heroes/spitakadzyunik_1.jpg',
    price: 35000,
    title: 'Princess show with 2 entertainers',
    options: [
      {
        id: 1,
        prividerId: 1,
        providerName: 'Gayluk',
        image: 'http://app.eventor.am/assets/images/services/cartoon_heroes/spitakadzyunik_1.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 12000,
        duration: 1,
      },
      {
        id: 2,
        prividerId: 2,
        providerName: 'Erazanq',
        image: 'http://app.eventor.am/assets/images/services/cartoon_heroes/spitakadzyunik_1.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 10000,
        duration: 1,
      },
      {
        id: 3,
        prividerId: 3,
        providerName: 'Little Einstein',
        image: 'http://app.eventor.am/assets/images/services/cartoon_heroes/spitakadzyunik_1.jpg',
        description: 'Lorem ipsum dolor sit amet, mei eu amet tempor concludaturque',
        price: 40000,
        duration: 1,
      },
    ],
    priceType: FIXED,
  },
];
