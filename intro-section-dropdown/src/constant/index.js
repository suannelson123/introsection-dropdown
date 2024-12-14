import clientAudioPhile from '../assets/images/client-audiophile.svg';
import clientDataBiz from '../assets/images/client-databiz.svg';
import clientMaker from '../assets/images/client-maker.svg';
import clientMeet from '../assets/images/client-meet.svg';
import iconArrowDown from '../assets/images/icon-arrow-down.svg';
import iconArrowUp from '../assets/images/icon-arrow-up.svg';
import iconCalendar from '../assets/images/icon-calendar.svg';
import iconCloseMenu from '../assets/images/icon-close-menu.svg';
import iconMenu from '../assets/images/icon-menu.svg';
import iconPlanning from '../assets/images/icon-planning.svg';
import iconReminder from '../assets/images/icon-reminders.svg';
import iconTodo from '../assets/images/icon-todo.svg';
import logo from '../assets/images/logo.svg';
import imageHeroDesktop from '../assets/images/image-hero-desktop.png';
import imageHeroMobile from '../assets/images/image-hero-mobile.png';


export {
    clientAudioPhile,
    clientDataBiz,
    clientMaker,
    clientMeet,
    iconArrowDown,
    iconArrowUp,
    iconCalendar,
    iconCloseMenu,
    iconMenu,
    iconPlanning,
    iconReminder,
    iconTodo,
    logo,
    imageHeroDesktop,
    imageHeroMobile,
};



export const links = [
    {
        id: 'feature1',
        navLink: 'Feature',
        arrow: iconArrowDown,
        featureDlinks: [
            {
                id: 'featuredroplink1',
                title: 'Todo',
                imgUrl: iconTodo,
            },
            {
                id: 'featuredroplink2',
                title: 'Calendar',
                imgUrl: iconCalendar,
            },
            {
                id: 'featuredroplink3',
                title: 'Reminders',
                imgUrl: iconReminder,
            },
            {
                id: 'featuredroplink4',
                title: 'Planning',
                imgUrl: iconPlanning,
            },
        ]
    },
    {
        id: 'company1',
        navLink: 'Company',
        arrow: iconArrowDown,
        companyDlinks: [
            {
                id: "companydroplink1",
                title: 'History',
            },
            {
                id: 'companydroplink2',
                title: 'Our Team',
            },
            {
                id: 'companydroplink3',
                title: 'Blog',
            },
        ]
    },
    {
        id: 'careers',
        navLink: 'Careers',
    },
    {
        id: 'about',
        navLink: 'About',
    },
];



export const CompanyLogo = [
    clientDataBiz, clientAudioPhile, clientMeet, clientMaker
]; 