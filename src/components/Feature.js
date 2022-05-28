import React from 'react'


function Feature({img, name, desc}) {
  return (
    <div className='feature-box'>
        <div className="title">
            <div className="title-img">
                <img src={img} alt="" />
            </div>
            <h3>{name}</h3>
        </div>
        <p>{desc}</p>

    </div>
  )
}

export default Feature