import React from 'react'
import TextSlideUp from '../effect/TextSlideUp'

function Content({contentRight, title, img, desc}) {

  function Img(){
    return(
      <div className="w-50 content_img">
          <img src="images/circle.png" alt="" className='circle-bg' style={contentRight?{top:"-5%", left:"-5%"}:null}/>
          <img src="images/dots.png" alt="" className='dots-bg' style={contentRight?{top:"-30%", left:"-20%"}:null}/>
          <img src={img} alt="" />
      </div>
    )
  }

  return (
    <div className='content_global'>
      {
        contentRight&&<Img/>
      }
      
      <div className="description" >
        <h1>
          <TextSlideUp>
            {title}
          </TextSlideUp>
        </h1>
        {
          desc.map(item=>(
            <p className='margin-bottom'>
              <TextSlideUp>
                {item}
              </TextSlideUp>
            </p>
          ))
        }
      </div>

      {
        !contentRight&&<Img/>
      }
    </div>
  )
}

export default Content