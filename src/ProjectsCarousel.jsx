import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
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
        logo: "https://via.placeholder.com/150",
        tags: ["JavaScript", "Vue", "Bioinformatics"]
    }
  ];
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} nextIcon={<MdNavigateNext/>} prevIcon={<MdNavigateBefore/>}>
      {data.map((project, index) => (
        <Carousel.Item key={index}>
            <div className='flex flex-col mx-4 mb-4'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <img
                        className="w-10 bg-white rounded-full"
                        src={project.logo}
                        alt={project.title}
                    />
                    <h3 className='text-2xl'>{project.title}</h3>
                </div>
                <p>{project.subtitle}</p>
                <a href={project.link} target="_blank" rel="noreferrer">More info</a>
            </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectsCarousel;