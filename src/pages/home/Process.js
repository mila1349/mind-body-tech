import React from 'react'
import Info from '../../components/Info'

function Process() {
    const data = [
        {
            title:"Innovation",
            description:"Developing bespoke and innovative ways is at the forefront in maximising business growth - both internally and externally."
        },
        {
            title:"Creativity",
            description:"Original ideas, endless imagination, our ethos is to provide unique solutions which allows for making your business better."
        },
        {
            title:"Quality",
            description:"High-standard development and marketing services with the aim of building meaningful business relationships that stand the test of time."
        },
    ]
  return (
    <div className='wrapper process' >
        <div id='info'>
            {
                data.map((item, index)=>(
                    <Info 
                        index={index}
                        data={item}
                    />
                ))
            }
            </div>
        <a href="/contact">
             <button>start project</button>
        </a>
       
    </div>
  )
}

export default Process