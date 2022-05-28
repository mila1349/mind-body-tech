import React, {useRef, useState} from 'react'
import Slider from 'react-slick/lib/slider'
import LinkService from '../../components/LinkService';
import Social from '../../components/Social';
import project from '../../data/projects.json'
import {motion} from 'framer-motion'

function Portfolio() {
    const [activeSlide, setActiveSlide] = useState(0)
    const portfolio = useState()
    const sliderRef = useRef(null)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        afterChange: current => setActiveSlide(current)
      };

  return (
    <motion.section id="portfolio" className='wrapper'
        initial={{y:'100px', opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1}}
        viewport={{ once: true }}
    >
        <h1>Browse our portfolio</h1>
        <p className='width-60'>Quis tincidunt id ante ut porttitor. Vel laoreet ut auctor nisi. Pharetra cras gravida ipsum mi facilisi nisi, morbi vitae, aliquam. Id eget mauris, sit vulputate pharetra. Condimentum ut turpis nisi, consequat nulla lectus.</p>

        <div className="box-full">
            <div className="bg"></div>
            <div className="portfolio-content">
                <div className="arrowCustom">
                    <svg className='btn'  viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>sliderRef.current.slickPrev()}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8423 24L0 12L20.8423 0V24Z" fill="black" />
                    </svg>

                    <svg className='btn'  viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>sliderRef.current.slickNext()}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24L20.8423 12L0 0V24Z" fill="black"/>
                    </svg>

                </div>
                <div className="slider-portfolio">
                    <Slider {...settings} ref={sliderRef}>
                        {
                            project.map((item)=>(
                                <img src={item?.image[0]} alt="" />
                            ))
                        }
                    </Slider>
                </div>
                <div className="content">
                    <div className='title margin-bottom'>
                        <h2>{project[activeSlide]?.name}</h2>
                    </div>
                    <LinkService />
                    <p className='margin-bottom'>{project[activeSlide]?.date}</p>
                    <p>{project[activeSlide]?.description}</p>
                    <Social 
                        display={false}
                    />
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Portfolio