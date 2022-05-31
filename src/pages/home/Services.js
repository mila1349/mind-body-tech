import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const spring = {
    type: "spring",
    duration:1
};

function Left({service, index}){
    return(
    <div className="services">
        <img src="images/elipse1.png" alt="" className='elipse1'/>
        <img src="images/elipse2.png" alt="" className='elipse2'/>
        <img src="images/elipse2.png" alt="" className='elipse3'/>


        <motion.h5 layoutId="index" transition={spring}>0{index+1} / 04</motion.h5>
        <div className="description">
            <motion.h3 layoutId="ourServices" transition={spring}>Our Services</motion.h3>
            <motion.h2 layoutId="expert" transition={spring}>Experts in</motion.h2>
            <motion.h1 layoutId="service" transition={spring}>{service.name}</motion.h1>
            <motion.p layoutId="desc" transition={spring}>{service.desc}</motion.p>
            <a href="/portfolio">
                <motion.button layoutId="btn" transition={spring}>see portfolio</motion.button>
            </a>
            
        </div>
        <motion.img src={service.img} alt="" initial={{y:-1000}} animate={{y:0}} transition={{duration:1}}/>
    </div>
    )
}

function Right({service, index}){
    return(
    <div className="services right">
        <img src="images/elipse1.png" alt="" className='elipse1'/>
        <img src="images/elipse2.png" alt="" className='elipse2'/>
        <img src="images/elipse2.png" alt="" className='elipse3'/>
        <motion.h5 layoutId="index" transition={spring}>0{index+1} / 04</motion.h5>
        
        <motion.img src={service.img} alt="" initial={{y:1000}} animate={{y:0}} transition={{duration:1}}/>
        <div className="description">
            <motion.h3 layoutId="ourServices" transition={spring}>Our Services</motion.h3>
            <motion.h2 layoutId="expert" transition={spring}>Experts in</motion.h2>
            <motion.h1 layoutId="service" transition={spring}>{service.name}</motion.h1>
            <motion.p layoutId="desc" transition={spring}>{service.desc}</motion.p>
            <motion.button layoutId="btn" transition={spring}>see portfolio</motion.button>
        </div>
        <motion.h5 layoutId="index" transition={spring}>0{index+1} / 04</motion.h5>
    </div>
    )
}
function Services() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [matchesPhone, setMatchesPhone] = useState(window.matchMedia("(max-width: 600px)").matches)
    const services = [
        {
            name:"Software Solution",
            img:"images/software.gif",
            desc:"Custom web builds and applications - we do the lot. From mobile to large-scale CRMs, we can develop an optimised digital experience to meet your business’s objectives."
        },
        {
            name:"Website Design",
            img:"images/design.gif",
            desc:"Trust us, you’ll look the part. We transform your business into a valuable brand with our hand-crafted web design and beautiful branding."
        },
        {
            name:"Marketing",
            img:"images/marketing.gif",
            desc:"We tailor industry-specific marketing campaigns to quickly scale your business through social media, PPC and SEO."
        },
        {
            name:"Business Growth",
            img:"images/business.gif",
            desc:"Our strategies and intricate management ensure an understanding of your business, your audience and executing your goals."
        },
    ]

    useEffect(() => {
        window.matchMedia("(max-width: 600px)").addEventListener('change', e => setMatchesPhone(e.matches));
    }, []);

  return (
    <motion.div id='services'
        initial={{y:'100px', opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1}}t3ew3w3e
        viewport={{ once: true }}
    >
        <AnimatePresence>
            {
                activeIndex % 2 == 0 ? 
                    <Left service={services[activeIndex]} index={activeIndex}/> 
                        : !matchesPhone?
                    <Right service={services[activeIndex]} index={activeIndex}/> 
                        : 
                    <Left service={services[activeIndex]} index={activeIndex}/> 
            }
        </AnimatePresence>
        <ul className="btn-circle-container">
            {
                services.map((item, index)=>(
                    <li onClick={()=>setActiveIndex(index)} style={activeIndex===index?{background:"#fff" ,border:"3px solid #E57D21"}:null}></li>  
                ))
            }
        </ul>
    </motion.div>
  )
}

export default Services