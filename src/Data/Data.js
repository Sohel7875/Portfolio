
import {faHome, faEnvelope, faUserGraduate, faFolder} from '@fortawesome/free-solid-svg-icons'
import {faCodeBranch, faCode,} from '@fortawesome/free-solid-svg-icons'
import image1 from '../../src/assets/react.png'
import image2 from '../../src/assets/node.png'
import image3 from '../../src/assets/MongoDB.svg'
import image4 from '../../src/assets/javascript.png'
import image5 from '../../src/assets/HTML.png'
import image6 from '../../src/assets/CSS.png'


//Project Pictures

import chat1 from '../../src/assets/Chat1.png'
import chat2 from '../../src/assets/Chat2.png'

import crypto1 from '../../src/assets/Crypto1.png'
import crypto2 from '../../src/assets/Crypto2.png'
import crypto3 from '../../src/assets/Crypto3.png'
import crypto4 from '../../src/assets/Crypto4.png'
import crypto5 from '../../src/assets/Crypto5.png'

import weather1 from '../../src/assets/Weather1.png'
import weather2 from '../../src/assets/Weather2.png'
import weather3 from '../../src/assets/Weather3.png'

import facebookclone1 from '../../src/assets/FacebookClone1.png'
import facebookclone2 from '../../src/assets/FacebookClone2.png'

import moviejs1 from '../../src/assets/MovieJs1.png'
import moviejs2 from '../../src/assets/MovieJs2.png'
import moviejs3 from '../../src/assets/MovieJs3.png'
import moviejs4 from '../../src/assets/MovieJs4.png'




export const navLinks = [
    {
        id: 1,
        name: 'Home',
        icon: faHome,      
        path: '/'
    },
    {
        id: 2,
        name: `About`,
        icon : faUserGraduate,
        path: '/About'
    }, 
    {
        id: 3,
        name: 'Portfolio',
        icon : faFolder,
        path: '/portfolio'
    },
    {
        id: 4,
        name: 'Contact',
        icon : faEnvelope,
        path: '/Contact'
    },
];



export const experience = [
    {
        id: 1,
        no: '1+',
        title:'Years Experience'
    },
    {
        id: 2,
        no: '10+',
        title:'Complete Projects'
    },
    {
        id: 3,
        no: '3+',
        title:'Happy Clintes'
    },
];



export const tools = [
    {
        id: 1,
        img: image1,
    },
    {
        id: 2,
        img: image2,
    },
    {
        id: 3,
        img: image3,
    },
    {
        id: 4,
        img: image4,
    },
    {
        id: 5,
        img: image5,
    },
    {
        id: 6,
        img: image6,
    },
];



export const services = [
    {
        id: 1,
        icon: faCode,
        name:'Web Development',
        des:`Crafting dynamic, user-friendly web solutions with React, Node.js, and MongoDB. Your vision, my expertise – let's build something remarkable together.`
    },
    {
        id: 2,
        icon: faCodeBranch,
        name:'Apps Development',
        des:`Crafting dynamic, user-friendly web solutions with React, Node.js, and MongoDB. Your vision, my expertise – let's build something remarkable together.`
    },
];





export const portfolio = [
    {
        id: 1,
        img: [chat1,chat2],
        name: 'JustChat',
        des: 'Real-time chat app with authentication, threading, and notifications for seamless communication among users.',
        github:'https://github.com/Sohel7875/justChat.git',
        demo:`https://justchat-two.vercel.app`
    },
    {
        id: 2,
        img: [crypto1,crypto2,crypto3,crypto4,crypto5],
        name: 'Crypyo Tracking',
        des: 'Cryptocurrency tracker app: Real-time data, sleek design, integrated APIs for prices and trends.',
        github:'https://github.com/Sohel7875/CryptoTracker.git',
        demo:`https://react-crypto-app-sandy.vercel.app/coins/bitcoin`
    },
    {
        id: 3,
        img: [weather1,weather2,weather3],
        name: 'WeatherApp',
        des: 'Cryptocurrency tracker app: Real-time data, sleek design, integrated APIs for prices and trends.',
        github:'https://github.com/Sohel7875/WeatherApp.git',
        demo:`https://weather-app-pi-lyart.vercel.app/`,
    },
    {
        id: 4,
        img: [facebookclone1,facebookclone2],
        name: 'Facebook UI Clone',
        des: 'Facebook Clone: Social media platform replica with user profiles, posts, likes, comments, and messaging functionalities.',
        github:'https://github.com/Sohel7875/Facebook-Clone.git',
        demo:`https://sohel7875.github.io/Facebook-Clone/`,
    },
    {
        id: 5,
        img: [moviejs1,moviejs2,moviejs3,moviejs4],
        name: 'Movie-Js',
        des: 'Movie Site: Platform showcasing movie information including ratings, cast, release dates, and search functionality utilizing external APIs for data retrieval.',
        github:'https://github.com/Sohel7875/Movie-js.git',
        demo:`https://github.com/Sohel7875/Movie-js.git#`,
    },
  
];




