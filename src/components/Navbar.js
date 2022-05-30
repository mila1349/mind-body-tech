import React, {useState} from 'react'
import Menu from './Menu'

function Navbar() {
    const [open, setOpen] = useState(false)
  return (
    <div className='navbar'>
        <Menu
            open={open}
            setOpen={setOpen}
        />
        <span>
            <ul>
                <li>
                    <a href="/">
                    <img src="images/logo.png" alt="" className='logo'/>
                    </a>
                </li>
                <li className='gone'>
                    <a href="/">
                        <h5>Home</h5>
                    </a>
                </li>
                <li>
                    <a href="#services">
                        <h5>Services</h5>
                    </a>
                </li>
                <li className='gone'>
                    <a href="/products">
                        <h5>Products</h5>
                    </a>
                </li>
                <li className='gone'>
                    <a href="/contact">
                        <h5>Contact</h5>
                    </a>
                </li>
                <li className='gone'>
                    <a href="/portfolio">
                        <h5>Portfolio</h5>
                    </a>
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