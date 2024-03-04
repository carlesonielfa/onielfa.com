import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ProjectsCarousel from './ProjectsCarousel.jsx';
import About from "./About.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

export default function App() {

  const links = [
    {
      id: "Github",
      url: "github.com/carlesonielfa",
      icon: <FaGithub />
    },
    {
      id: "Resume",
      url: "docs.google.com/document/d/14GXlDhuvXqE33IwdDtI7C-YggTsY5uB_kFjK1nRtydU/edit?usp=sharing",
      icon: <FaFilePdf />
    },
    {
      id: "LinkedIn",
      url: "linkedin.com/in/carlesonielfa",
      icon: <FaLinkedin />
    },
  ]
  const data = [
    {
      id: 0,
      title: "About me",
      body: <About />,
      color: "text-white"
    },
    /*{
      id: 1,
      title: "Highlighted Projects",
      body: <ProjectsCarousel />,
      color: "text-white"
    },*/
  ]
  function data_to_section(data) {
    return (
      <div key={data.id} className="p-2 border-t-2 border-b-2 border-b-gray-500 shadow-md ring-white rounded-2xl max-w-[510px] mt-4 mx-auto text-white">
        <p className={'text-2xl text-center font-bold drop-shadow-md sm:text-3xl ' + data.color}>{data.title}</p>
        <div className=' py-2 px-3 '>
          {
            // If the body is an array, render each element as a paragraph
            Array.isArray(data.body) ? data.body.map((item, index) => (
              <p key={index} className='text-md my-2 '>{item}</p>
            )) : data.body
          }
        </div>
      </div>
    )
  }
  return (

    <div className="flex-col min-h-screen bg-gradient-to-b from-gray-300 to-gray-400 flex items-center justify-center">
      <nav className="navbar sticky-top w-full shadow-md justify-center py-1 items-stretch bg-white/60 hidden">
        <div className="max-w-[700px] w-full flex flex-row text-xs justify-evenly sm:text-base uppercase tracking-widest text-gray-600 gap-2 sm:px-12 text-center">
            <a>About</a>
            <p>·</p>
            <a>Projects</a>
            <p>·</p>
            <a>Side Quests</a>
        </div>
      </nav>
      <div className="min-w-0  flex-1 px-6 py-8 sm:py-14">
        <h2 className='hit-the-floor text-4xl text-white tracking-tight uppercase font-bold sm:text-6xl text-center'>
          Carles Onielfa
        </h2>
        <h3 className='hit-the-floor text-2xl text-white tracking-tight font-bold sm:text-4xl text-center'>
          ML Research Engineer
        </h3>

        <div className="flex justify-center mt-4 ">
          {
            links.map((link) => (
              <a key={link.id} href={`https://${link.url}`} target="_blank" className="text-3xl text-gray-200 mx-3 hover:text-white" rel="noreferrer">{link.icon}</a>
            ))
          }
        </div>
        <p className='text-center text-gray-100 text-sm mt-2 font-bold font-mono'>carlesonielfa(at)gmail.com</p>



        {<div className="mt-2">
          {
            data.map((item) => (
              data_to_section(item)
            ))
          }
        </div>}

      </div>
      <footer className='text-gray-200 text-center text-sm opacity-50' >
        Template by <a href="http://www.onielfa.com" className="text-gray-100 font-semibold">Carles Onielfa</a>
      </footer>
    </div>
  )
}