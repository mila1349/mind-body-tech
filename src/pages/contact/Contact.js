import React from 'react'
import Header from '../portfolio/Header'
import './style.scss'
import Social from '../../components/Social'

function Contact() {
  return (
    <div id='contact'>
        <Header 
            title="Contact Us"
            social={false}
        />
        <div className="wrapper">
            <div className="email-contact">
                <input type="text" placeholder='Full Name'/>
                <input type="text" placeholder='Email Address'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button>send</button>
            </div>

            <div className="email-contact">
            <Social 
                display={true}
            />

            <div className="footer-box">
              <h3 >Contact Us</h3>
              <ul>
                <li className='margin-bottom'>
                  <img src="images/mail-black.png" alt="" />
                  <a href=""><p>info@mindbody-tech.com</p></a>
                </li>
                <li className='margin-bottom'>
                  <img src="images/phone-black.png" alt="" />
                  <a href=""><p>0161 818 2297</p></a>
                </li>
              </ul>
            </div>

            <div className="footer-box">
              <h3>Find Us</h3>
              <ul>
                <li >
                  <p> Merchants House, 24-25 Market Place, Stockport, SK1 !EU</p>
                </li>
              </ul>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Contact