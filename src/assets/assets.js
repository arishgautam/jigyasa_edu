import logo from './logo.svg'
import arrow_icon from './arrow_icon.svg'
import group_profile from './group_profile.png'
import bgImage1 from './bgImage1.png'
import bgImage2 from './bgImage2.png'
import hero_img from './hero_img.png'
import microsoft_logo from './microsoft_logo.png'
import zoom_logo from './zoom_logo.png'
import rakuten_logo from './rakuten_logo.png'
import coinbase_logo from './coinbase_logo.png'
import ads_icon from './ads_icon.svg'
import content_icon from './content_icon.svg'
import marketing_icon from './marketing_icon.svg'
import social_icon from './social_icon.svg'
import menu_icon from './menu_icon.svg'
import close_icon from './close_icon.svg'
import Expensetracker from './Expensetracker.png'
import resume  from './resume.png'
import chess  from './chess.png'
import weather from './weather.png'
import fooddel from './fooddel.png'
import netflix from './netflix.png'
import work_mobile_app from './work_mobile_app.png'
import work_fitness_app from './work_fitness_app.png'
import work_dashboard_management from './work_dashboard_management.png'
import email_icon from './email_icon.svg'
import person_icon from './person_icon.svg'
import facebook_icon from './facebook_icon.svg'
import twitter_icon from './twitter_icon.svg'
import instagram_icon from './instagram_icon.svg'
import linkedin_icon from './linkedin_icon.svg'
import logo_dark from './logo_dark.svg'
import airbnb_logo from './airbnb_logo.svg'
import google_logo from './google_logo.svg'
import menu_icon_dark from './menu_icon_dark.svg'
import sun_icon from './sun_icon.svg'
import moon_icon from './moon_icon.svg'


export const company_logos = [
  microsoft_logo,
  zoom_logo,
  rakuten_logo,
  coinbase_logo,
  airbnb_logo,
  google_logo,
]

const assets = {
  logo,
  arrow_icon,
  group_profile,
  bgImage1,
  bgImage2,
  hero_img,
  ads_icon,
  content_icon,
  marketing_icon,
  social_icon,
  menu_icon,
  close_icon,
  work_mobile_app,
  work_fitness_app,
  work_dashboard_management,
  email_icon,
  person_icon,
  facebook_icon,
  twitter_icon,
  instagram_icon,
  linkedin_icon,
  logo_dark,
  menu_icon_dark,
  sun_icon,
  moon_icon
}

export default assets

export const teamData = [
  {
    name: 'Purnima Bhattarai',
    title: 'Founder',
    image: '/team/purnima.jpeg',
    description: 'I’m a curious, observant, and ambitious technology enthusiast passionate about AI, Machine Learning, and software development. As a founder, I’m driven by the desire to help others, share knowledge, and create opportunities. This vision led me to build Jigyasa Edu—a supportive platform where students can connect, seek guidance, explore opportunities, and turn curiosity into action.',
  },

  {
    name: 'Arish Gautam',
    title: 'CO-Founder',
    image: '/team/arish.JPG',
    description: 'I’m a CSIT student at Madan Bhandari Memorial College and a passionate full-stack developer with a strong interest in web development, cybersecurity, and emerging technologies. As a Co-Founder of Jigyasa Edu, I’m working to create a platform where students can connect, learn, seek guidance, and explore opportunities. With experience in the MERN and PERN stacks, I enjoy building scalable applications and turning ideas into practical, impactful digital solutions.',
  },

  {
    name: 'Aaditya Subedi',
    title: 'Tech Head',
    image: '/team/aaditya.JPG',
    description: 'A Computer Science student and Tech Head at Jigyasa Edu with a strong interest in Artificial Intelligence, software engineering, and emerging technologies. He has experience working across frontend, backend, and database development, and enjoys building applications while exploring how different technologies work behind the scenes. His main focus is AI-powered applications and intelligent systems, with a passion for experimenting, learning new technologies, and turning ideas into practical solutions',
  },

  {
    name: 'Samikshya Gautam',
    title: 'Resource Manager',
    image: '/team/samikshya.jpeg',
    description: 'I’m a Civil Engineering student and Resource Manager at Jigyasa Edu, with a strong interest in technology, engineering, and innovation. I enjoy exploring the connection between civil engineering and modern technology while continuously developing my skills. At Jigyasa Edu, I manage educational resources, coordinate with the team, and contribute to creating valuable learning opportunities. I’m passionate about learning, building practical skills, and turning ideas into meaningful projects and solutions.',
  },

  {
    name: 'Janabi Adhikari',
    title: 'Social Media Manager',
    image: '/team/janabi.jpeg',
    description: 'I’m a passionate Computer Engineering student, developer, and technology enthusiast interested in software engineering, AI, and emerging technologies. I enjoy solving problems, learning new technologies, and turning ideas into meaningful digital experiences. With experience in web development, programming, and databases, I’m focused on building practical solutions and exploring how technology can make learning smarter and more accessible.',
  },
]

export const projects = [
  {
    title: 'Expense Tracker',
    description:
      'An AI-powered Expense Tracker web app that lets users track, manage, and understand their personal expenses through a simple interface.',
    image: Expensetracker,
    github: 'https://github.com/arishgautam/Ai_ExpenseTracker_Frontend',
  },

  {
    title: 'Resume Builder',
    description:
      'A Resume Builder web app that lets users create, customize, and generate professional resumes easily through a simple interface.',
    image: resume,
    github: 'https://github.com/lemongautam79/Resume_Builder_Frontend',
  },

  {
    title: 'Alkeri(Chess game)',
    description:
      'A full-stack web application where two players can play chess against each other live through a web browser, while extra users can join as spectators to watch the game in real time.',
    image: chess,
    github: 'https://github.com/Samikshyaaa13/chess',
  },

  {
    title: 'Weather App',
    description:
      'A Weather App that lets users check real-time weather conditions and forecasts for different locations through a simple interface..',
    image: weather,
    github: 'https://github.com/swikritaryal/weather-app',
  },

  {
    title: 'Tomato(Food delivery)',
    description:
      'A Food Delivery web app that lets users browse food, explore restaurants, and order meals easily through a simple interface.',
    image: fooddel,
    github: 'https://github.com/zoro1001/fooddelivery_app',
  },

  {
    title: 'Netflix clone',
    description:
      'A Netflix-inspired streaming platform built with React that lets users browse, search, and explore movies with authentication and dynamic data from the TMDB API.',
    image: netflix,
    github: 'https://github.com/janabiadhikari/netflix-clone',
  },
]