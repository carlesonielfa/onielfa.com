import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { MdNavigateNext, MdNavigateBefore, MdOpenInNew } from "react-icons/md";
import './ProjectsCarousel.css';
function ProjectsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const data = [
    {
        title: "Shape Analyzer",
        subtitle: "AI powered tool for morphometric research",
        link: "",
        status: "Manuscript in preparation",
        logo: "src/assets/shape_64x64.png",
        tags: ["Python", "PyTorch", "OpenCV", "Electron", "React", "Flask", "Segmentation"]
    },
    {
        title: "GenoVarView",
        subtitle: "Web-based platform for genomic variability visualization",
        link: "https://bioinformatics.cragenomica.es/projects/genovarview/",
        status: "Manuscript in preparation",
        logo: "src/assets/genovarviewlogo.svg",
        tags: ["JavaScript", "Vue", "Bioinformatics"]
    }
  ];
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} nextIcon={<MdNavigateNext/>} prevIcon={<MdNavigateBefore/>} interval={10000}>
      {data.map((project, index) => (
        <Carousel.Item key={index}>
            <div className='flex flex-col mx-4 mb-4 min-h-sm'>
                <div className='flex flex-row justify-center items-center gap-2 mb-6 mt-2'>
                    <img
                        className="w-12 bg-white rounded-full h-12 p-1" 
                        src={project.logo}
                        alt={project.title}
                    />
                    <h3 className='text-2xl'>{project.title}</h3>
                </div>
                <p className='mx-2 text-center'>{project.subtitle}
                <a href={project.link} target="_blank" rel="noreferrer">  <MdOpenInNew className='inline'/></a></p>
            </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectsCarousel;