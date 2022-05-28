import React from 'react'
import FeatureBox from '../../components/Feature'
import {motion} from 'framer-motion'

function Feature({data}) {
  return (
    <motion.section id='feature' className='wrapper'
      initial={{y:'100px', opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:1}}
      viewport={{ once: true }}
    >
        <div className='feature'>
          {
            data.map(item=>(
              <FeatureBox
                img={item?.img}
                name={item?.name}
                desc={item?.desc}
              />
            ))
          }

        </div>
        <div className="btn-container">
            <a href="/contact">
              <button>try now</button>
            </a>
            
            <a href="tel:+01618182297">
            <button className='btn-second'>request call</button>
            </a>
        </div>
    </motion.section>
  )
}

export default Feature