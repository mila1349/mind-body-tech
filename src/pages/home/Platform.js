import React, {useState} from 'react'
import Switch from '../../components/Switch';
import data from '../../data/platform.json'
import {AnimateSharedLayout, motion, AnimatePresence} from 'framer-motion'

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
    duration: 10
  };

function SharedComponent({data}){
    return(
        <AnimatePresence>
        <motion.div className="shared-component"
            layoutId={data.name}
            transition={spring}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
        >
            <div className="box">
                <img src={data.image} alt="" />
            </div>
            <p>{data.name}</p>
        </motion.div>
        </AnimatePresence>
    )
}

function getPlatform(){
    let arr=[]
    for (let index = 0; index < data.length; index++) {
        arr.push(data[index].name)
    }
    console.log(arr)
    return arr
}

function Platform() {
    const [selected, setSelected] = useState(0);
    const platformCategory = getPlatform()


    return (
    <div id='platform'
        
    >
        <motion.div className="platform"
            initial={{y:'100px', opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:1}}
            viewport={{ once: true }}
        >
            <h1>Platform we build on</h1>
            <p className='width-60'>In order to facilitate and deliver business success, we work on a diverse array of platforms – from social media to tech giants:</p>
            <Switch data={platformCategory} selected={selected} setSelected={setSelected} />

            <AnimateSharedLayout>
            <div className="content_shared">
                {data[selected].item.map(
                    (x) => <SharedComponent  data={x}/>
                )}
            </div>
            </AnimateSharedLayout>
        </motion.div>
    </div>
  )
}

export default Platform