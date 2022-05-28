import React from 'react'

function Footer() {
  return (
    <section id='footer' >
        <div className="footer">
            <div className="footer-box">
              <h3 >Contact Us</h3>
              <ul>
                <li className='margin-bottom'>
                  <img src="images/mail.png" alt="" />
                  <a href="mailto:info@mindbody-tech.com"><p>info@mindbody-tech.com</p></a>
                </li>
                <li className='margin-bottom'>
                  <img src="images/phone.png" alt="" />
                  <a href="tel:+01618182297"><p>0161 818 2297</p></a>
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

            <div className="footer-box">
              <h3 >Operating Hours</h3>
              <ul className='dot'>
                <li className='margin-bottom'><p> Monday - Friday 8:30am - 18:00pm</p></li>
                <li className='margin-bottom'><p>Saturday: 11: 00am - 15:00pm</p></li>
                <li className='margin-bottom'><p>Sunday: 11: 00am - 15:00pm</p></li>
              </ul>
            </div>
        </div>

        <ul className='additional-links'>
          <li>
            <p><a href="/privacy">Privacy & Policy</a></p>
          </li>
          <li>
            <p> <a href="/terms">Terms & Condition</a></p>
          </li>
          <li>
          <p><a href="/cookie">Cookie Policy</a></p>
          </li>
        </ul>
        <div className="copyright">
            <p>© Copyright 2020 - mindbodytech, All rights reserved</p>
        </div>

        <div className="join">
          <h2>Ready to work with us?</h2>
          <a href="/contact">
             <button>start project</button>
        </a>
        </div>
    </section>
  )
}

export default Footer