import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
// import tour5 from './images/tour-5.jpeg';
// import tour6 from './images/tour-6.jpeg';
export const pageLinks = [
    {
        id: 1,
        href: '#home',
        text: 'Home'
    },
    {
        id: 2,
        href: '#about',
        text: 'About'
    },
    {
        id: 3,
        href: '#services',
        text: 'Services'
    },
    {
        id: 4,
        href: '#tours',
        text: 'Tours'
    },
];
export const socialLink = [
    {
        id: 1,
        href: 'https://www.twitter.com',
        icon: 'fab fa-twitter'
    },
    {
        id: 2,
        href: 'https://www.squarespace.com',
        icon: 'fab fa-squarespace'
    },
      {
        id: 3,
        href: 'https://www.facebook.com',
       icon: 'fab fa-facebook'
    }
     
];
export const serviceData = [
    {
        id: 1,
        icon:'fas fa-wallet fa-fw',
            text:'saving money',
        paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia.'
    },
     {
        id: 2,
        icon:'fas fa-tree fa-fw',
            text:'endless hiking',
        paragraph:'I absolutely love hiking. do you?.'
    },
        {
        id: 3,
        icon:'fas fa-socks fa-fw',
            text:'amazing comfort',
        paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia.'
    },
];
export const tourData = [
    {
        id: 1,
        source: tour1,
        date: 'august 26th, 2020',
        text: 'Tibet Adventure',
        paragraph: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'china',
        duration: '6',
         mny:'from $2100'
    },
    {
        id: 2,
        source: tour2,
        date: 'october 1th, 2020',
        text: 'best of java',
       paragraph: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'indonesia',
        duration: '11 ',
         mny:'from $1400'
    },
    {
        id: 3,
        source: tour3,
        date: 'september 15th, 2020',
        text: 'Explore Hongkong',
       paragraph: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'Hongkong',
        duration: '8 ',
         mny:'from $5000'
    },
    {
        id: 4,
        source: tour4,
        date: 'december 5th, 2019',
        text: 'Kenya highlights',
       paragraph: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'Kenya',
        duration: '20 ',
         mny:'from $3300'
    },
];