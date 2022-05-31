import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

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
                <Link to="/" onClick={()=>setOpen(false)}>
                    <h1>Home</h1>
                </Link>
            </li>
            <li >
                <HashLink to="/#services" onClick={()=>setOpen(false)}>
                    <h1>Services</h1>
                </HashLink>
            </li>
            <li >
                <Link to="/products" onClick={()=>setOpen(false)}>
                    <h1>Products</h1>
                </Link>
            </li>
            <li>
                <Link to="/contact" onClick={()=>setOpen(false)}>
                    <h1>Contact</h1>
                </Link>
            </li>
            <li >
                <Link to="/portfolio" onClick={()=>setOpen(false)}>
                    <h1>Portfolio</h1>
                </Link>
            </li>
        </ul>
    </motion.div>
  )
}

export default Menu