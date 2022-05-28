import React, {useState} from 'react'
import Header from './Header'
import Switch from '../../components/Switch';
import projects from '../../data/projects.json'
import services from '../../data/services.json'
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  duration: 10
};

function SharedComponent({project}){
  return(
      <AnimatePresence>
        <a href={`/project?name=${project.name}`}>
        <motion.div className="box-portfolio"
          layoutId={project.name}
          transition={spring}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <img src="images/unicoin-laptop.png" alt="" />
          <motion.div className="overlay"
            initial={{opacity:0}}
            whileHover={{opacity:1}}
          >
            <h2 className='margin-bottom'>{project?.name}</h2>
            <p>{project.shortDescription}</p>
          </motion.div>
        </motion.div>
        </a>
      </AnimatePresence>
  )
}

function PortfolioList() {
  const [selected, setSelected] = useState(0);
  return (
    <div>
        <Header
            title="Our Portfolio"
            button={true}
        />
        <div className="wrapper portfolio-list">
          <Switch data={services} selected={selected} setSelected={setSelected} />
          <div className="flex"
            
          >

            <AnimateSharedLayout>
              {
                projects.map(item=>
                  item.serivces.includes(services[selected]) && <SharedComponent project={item}/>
                )
              }
            </AnimateSharedLayout>

          </div>
        </div>
    </div>
  )
}

export default PortfolioList