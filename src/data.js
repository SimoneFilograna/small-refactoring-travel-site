import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';


export const navLink = [
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
        href: '#torus',
        text: 'Tours'
    },

]

export const navIcon = [
    {
        id: 1,
        href: 'https://www.facebook.com',
        icon: 'fab fa-facebook'
    },
    {
        id: 2,
        href: 'https://www.twitter.com',
        icon: 'fab fa-twitter'
    },
    {
        id: 3,
        href: 'https://www.squarespace.com/',
        icon: 'fab fa-squarespace'
    }
]

export const services = [
    {
        id: 1,
        servIcon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    },
    {
        id: 2,
        servIcon: 'fas fa-tree fa-fw',
        title: 'endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    },
    {
        id: 3,
        servIcon: 'fas fa-socks fa-fw',
        title: 'amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    },
]

export const tours = [
    {
        id: 1,
        img: tour1,
        date: 'august 26th, 2024',
        name: 'Tibet Adventure',
        state: 'china',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        timeTravel: '6 days',
        price: '$2100'
    },
    {
        id: 2,
        img: tour2,
        date: 'april 26th, 2024',
        name: 'best of java',
        state: 'indonesia',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        timeTravel: '12 days',
        price: '$1800'
    },
    {
        id: 3,
        img: tour3,
        date: 'december 26th, 2024',
        name: 'explore hong kong',
        state: 'china',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        timeTravel: '16 days',
        price: '$2800'
    },
    {
        id: 4,
        img: tour4,
        date: 'october 26th, 2024',
        name: 'kenya highlights',
        state: 'kenya',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        timeTravel: '15 days',
        price: '$2900'
    }
]