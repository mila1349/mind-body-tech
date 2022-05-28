import React from 'react'
import {motion} from 'framer-motion'

function Menu({open, setOpen}) {
  return (
    <motion.div id='menu' 
        initial={{x:"100vw"}}
        animate={open?{x:0}:{x:"100vw"}}
        transition={{
            duration:1
        }}
    >
        <ul>
            <li >
                <a href="/">
                    <h1>Home</h1>
                </a>
            </li>
            <li >
                <a href="/products">
                    <h1>Products</h1>
                </a>
            </li>
            <li>
                <a href="/contact">
                    <h1>Contact</h1>
                </a>
            </li>
            <li >
                <a href="/portfolio">
                    <h1>Portfolio</h1>
                </a>
            </li>
        </ul>
    </motion.div>
  )
}

export default Menu