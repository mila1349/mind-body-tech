import React, {useState, useRef} from 'react'
import Header from './Header'
import './style.scss'
import Slider from "react-slick";
import Content from '../../components/Content';
import Banner from './Banner';
import project from '../../data/projects.json'
import { useQuery } from '../../hooks/useQuery';
import {motion} from 'framer-motion'

function Portfolio() {
    const sliderRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0)
    const selectedProject = getProject(useQuery().get('name'))
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        afterChange: current => setActiveIndex(current)
    };

    function getProject(x){
        for (let i=0; i < project.length; i++) {
            if (project[i].name === x) {
                return project[i];
            }
        }
    }

    const handleOnClick = index => {
        sliderRef.current.slickGoTo(index);
    };

  return (
    <div id='portfolio-page' >
        <Header 
            title={selectedProject?.name}
            desc={selectedProject?.description}
            date={selectedProject?.date}
            links={selectedProject?.serivces}
            social={true}
        />
        <div className="wrapper">
            <motion.div className="slider-simple"
                initial={{y:'100px', opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
                viewport={{ once: true }}
            >
                <Slider {...settings} ref={sliderRef}>

                    {
                        selectedProject?.image.map(item=>(
                            <img src={item} alt="" />
                        ))
                    }
                </Slider>
                <ul className="btn-circle-container">
                {
                    selectedProject?.image.map((item, index)=>(
                        <li onClick={()=>handleOnClick(index)} style={activeIndex===index?{background:"#fff" ,border:"3px solid #E57D21"}:null}></li>  
                    ))
                }
                </ul>
            </motion.div>
        </div>
        <Content 
            title="The Solution"
            img={selectedProject?.mockup}
            desc={selectedProject?.solution}
            contentRight={true}
        />
        <Banner 
            img={selectedProject?.banner}
        />
        <Content 
            title="The Build"
            img="images/build.png"
            desc={selectedProject?.build}
            contentRight={false}
        />
    </div>
  )
}

export default Portfolio