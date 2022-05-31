import React, {useState, useEffect} from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    const [open, setOpen] = useState(false)
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
    

  return (
    <div className='navbar'>
        <Menu
            open={open}
            setOpen={setOpen}
        />
        <span>
            <ul>
                <li>
                    <Link to="/">
                        <img src="images/logo.png" alt="" className='logo'/>\
                    </Link>
                </li>
                <li className='gone'>
                    <Link to="/">
                        <h5>Home</h5>
                    </Link>
                </li>
                <li className='gone'>
                    <HashLink to="/#services" scroll={el => scrollWithOffset(el)}>
                        <h5>Services</h5>
                    </HashLink>
                </li>
                <li className='gone'>
                    <Link to="/products">
                        <h5>Products</h5>
                    </Link>
                </li>
                <li className='gone'>
                    <Link to="/contact">
                        <h5>Contact</h5>
                    </Link>
                </li>
                <li className='gone'>
                    <Link to="/portfolio">
                        <h5>Portfolio</h5>
                    </Link>
                </li>
            </ul>
        </span>
        <span>
            <ul>
                <li className='gone'>
                    <button className='btn-circle'>
                        <img src="images/map-pin.png" alt="" />
                    </button>
                </li>
                <li className='gone'>
                    <a href="tel:+01618182297">
                    <button className='btn-circle'>
                        <img src="images/phone.png" alt="" />
                    </button>
                    </a>
                </li>
                <li className='gone'>
                    <a href="/contact">
                        <button>
                            start project
                        </button>
                    </a>
                </li>
                <li className='menu-toggle' onClick={()=>setOpen(!open)}>
                    <button>
                        <img src="images/menu.png" alt="" />
                    </button>
                </li>
            </ul>
        </span>
    </div>
  )
}

export default Navbar