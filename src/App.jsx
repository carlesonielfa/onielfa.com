import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
      id: 1,
      title: "Highlighted Research",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      color: "indigo-400"
    },
    {
      id: 2,
      title: "Professional Experience",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      color: "red-400"
    },
  ]
  function data_to_section(data) {
    const cls = 'card-header-pill text-lg font-bold uppercase text-' + data.color;
    console.log(cls);
    return (
      <div key={data.id} className="card mt-5 mx-auto">
        <p className={cls}>{data.title}</p>
        <div className='card-body'>{data.body}</div>
      </div>
    )
  }
  return (
    <div className="bg-gray-100 flex-col min-h-screen">
      <div className="min-w-0  flex-1 px-6 py-11">
        <h2 className='hit-the-floor text-4xl text-white tracking-tight uppercase font-bold sm:text-6xl text-center'>
        Carles Onielfa
        </h2>
        <h3 className='hit-the-floor text-2xl text-white tracking-tight font-bold sm:text-4xl text-center'>
        ML Research Engineer
        </h3>
        <div className="flex justify-center mt-5">
          {
            links.map((link) => (
              <a key={link.id} href={`https://${link.url}`} target="_blank" className="text-3xl text-gray-300 mx-3 hover:text-gray-700" rel="noreferrer">{link.icon}</a>
            ))
          }
        </div>
        <p className='text-center text-gray-400 text-sm mt-2'>carlesonielfa (at) gmail.com</p>
        <div className="mt-5">
          {
            data.map((item) => (
              data_to_section(item)
            ))
          }
        </div>
      </div>
      <footer className='text-gray-400 text-center text-sm opacity-50' >
        Template by <a href="http://www.onielfa.com" className="text-gray-500">Carles Onielfa</a>
      </footer>
    </div>
  )
}