import React, {useState} from 'react'
import Header from '../portfolio/Header'
import './style.scss'
import Social from '../../components/Social'
import apiKey from './emailKey'
import * as emailjs from "emailjs-com";

function Contact() {
  const [message, setMessage] = useState({name:"", email:"", message:"", phone:""})

  function handleSubmit(e){
    e.preventDefault();
    emailjs.send(apiKey.SERVICE_ID,apiKey.TEMPLATE_ID,{
        from_name: message.name,
        email:message.email,
        phone:message.phone,
        message: message.message,
    },apiKey.USER_ID).then((result)=>{
        alert("Message Sent", result.text);
    })
    
    setMessage({name:"", email:"", message:"", phone:""})
}

  return (
    <div id='contact'>
        <Header 
            title="Contact Us"
            social={false}
        />
        <div className="wrapper">
            <div className="email-contact">
                <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Full Name' required onChange={e=>setMessage({...message, name:e.target.value})}/>
                <input type="email" placeholder='Email Address' required onChange={e=>setMessage({...message, email:e.target.value})}/>
                <input type="phone" placeholder='Phone Number' required onChange={e=>setMessage({...message, phone:e.target.value})}/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Message' required onChange={e=>setMessage({...message, message:e.target.value})}></textarea>
                <button>send</button>
                </form>
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
                  <a href="mailto:info@mindbody-tech.com"><p>info@mindbody-tech.com</p></a>
                </li>
                <li className='margin-bottom'>
                  <img src="images/phone-black.png" alt="" />
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

            </div>

        </div>
    </div>
  )
}

export default Contact