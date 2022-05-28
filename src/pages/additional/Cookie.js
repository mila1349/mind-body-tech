import React from 'react'
import Header from '../portfolio/Header'
import './style.scss'

function Cookie() {
  return (
    <div>
        <Header 
            title="Cookie Policy"
            desc="MBT Services Limited understands that your privacy is important to you and that you care about how your personal data is used. We respect and value the privacy of everyone who visits this website, www.opopmedia.co.uk (“Our Site”) and will only collect and use personal data in ways that are described here, and in a way that is consistent with our obligations and your rights under the law. Please read this Privacy Policy carefully and ensure that you understand it. Your acceptance of this Privacy Policy is requested when you visit our Site."
            social={false}
        />
        <div className="wrapper additional" >
            <h1 className='margin-bottom'>1. Information About Us</h1>
            <p>Our Site is owned and operated by MBT Services Limited a company incorporated in England and Wales with company number 11333254 whose registered office is at Bushbury House 435 Wilmslow Road, Withington, Manchester, England, M20 4AF.</p>

            <h1 className='margin-bottom'>2. What Does This Policy Cover?</h1>
            <p>This Privacy Policy applies only to your use of Our Site. Our Site may contain links to other websites. Please note that we have no control over how your data is collected, stored, or used by other websites and we advise you to check the privacy policies of any such websites before providing any data to them.</p>
        </div>
    </div>
  )
}

export default Cookie