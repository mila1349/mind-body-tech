import React from 'react'

function Banner({img}) {
  return (
    <div className='banner'>
        <img src={img} alt="" className='banner-center'/>

        <img src="images/bg.png" alt="" className='bg'/>
    </div>
  )
}

export default Banner