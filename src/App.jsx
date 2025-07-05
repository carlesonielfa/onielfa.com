import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ProjectsCarousel from './ProjectsCarousel.jsx';
import About from "./About.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Qwen3TokenHeatmap from "./articles/Qwen3TokenHeatmap.jsx";

export default function App() {

  const links = [
    {
      id: "Github",
      url: "github.com/carlesonielfa",
      icon: <FaGithub />
    },
    {
      id: "Resume",
      url: "docs.google.com/document/d/e/2PACX-1vRknms-cu8IZc1x-tSkzVDA1tmIMUqvcO7j8naL6d3JyPlWKvU3cLBB9yscmdLdUbDHRTyljdp2VgAX/pub",
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
      <div key={data.id} className="p-2 border-t-2 border-b-2 border-b-gray-500 border-t-gray-300 shadow-md rounded-2xl max-w-[510px] mt-4 mx-auto text-white bg-gray-400/50">
        <p className={'text-2xl text-center font-bold drop-shadow-md sm:text-3xl ' + data.color}>{data.title}</p>
        <div className='py-2 px-3'>
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
      <Routes>
        <Route path="/articles/qwen3_token_heatmap" element={<Qwen3TokenHeatmap />} />
        <Route path="/" element={
          <div className="flex-col min-h-screen bg-gradient-to-b from-gray-300 to-gray-400 flex items-center justify-center pt-3">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 sm:mt-8">
              <img className="w-[130px] sm:w-[180px] rounded-full bg-white sm:p-1.5 p-1 shadow-md" src="photo.jpg"></img>
              <div>
                <h2 className='hit-the-floor text-4xl text-white tracking-tight uppercase font-bold sm:text-6xl text-center'>
                Carles Onielfa
                </h2>
                <h3 className='hit-the-floor text-2xl text-white tracking-tight font-bold sm:text-4xl text-center'>
                  Machine Learning Engineer
                </h3>
              </div>
            </div>
            <div className="flex justify-center mt-3">
              {
                links.map((link) => (
                  <a key={link.id} href={`https://${link.url}`} target="_blank" className="text-3xl text-gray-200 mx-3 hover:text-white" rel="noreferrer">{link.icon}</a>
                ))
              }
            </div>
            <p className='text-center text-gray-100 text-sm mt-2 font-bold font-mono'>carles(at)onielfa.com</p>
            <div className="my-2">
              {
                data.map((item) => (
                  data_to_section(item)
                ))
              }
            </div>
            <div className="my-auto"/>
            <footer className='text-gray-200 text-center text-sm opacity-50 my-2' >
              Template by <a href="http://www.onielfa.com" className="text-gray-100 font-semibold">Carles Onielfa</a>
            </footer>
          </div>
        } />
      </Routes>
  )
}