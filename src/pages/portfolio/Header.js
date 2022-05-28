import React from 'react'
import LinkService from '../../components/LinkService'
import Social from '../../components/Social'
import TextSlideUp from '../../effect/TextSlideUp'

function Header({title, desc, date, links, social, button}) {
  return (
    <div className='header'>
        <h1>
            {title}
        </h1>
        <LinkService links={links}/>
        <p className='width-60'>
            {desc}
        </p>
        <Social display={social}/>
        <p>
            {date}
        </p>
        {
          button?<button>start project</button>:null
        }
        
    </div>
  )
}

export default Header