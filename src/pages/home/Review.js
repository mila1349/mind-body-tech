import React from 'react'
import Slider from "react-slick";
import data from '../../data/review.json'
import {motion} from 'framer-motion'

function ArrowLeft(props) {
    const { style, onClick } = props;
    return (
        <svg className='arowLeft btn' style={{ ...style, display: "block" }} onClick={onClick} width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.419564 11.6254L9.37991 0.745377C10.1214 -0.0845422 11.3099 -0.16356 12.0902 0.475283C12.8706 1.11413 12.9992 2.40525 12.3599 3.1856L5.97945 10.9259H30.0803C31.1406 10.9259 32.0005 11.7858 32.0005 12.8461C32.0005 13.9064 31.1407 14.7662 30.0803 14.7662H5.97945L12.3599 22.5065C12.9987 23.2865 12.855 24.5597 12.0902 25.2169C11.3014 25.8946 10.0188 25.7271 9.37991 24.9468L0.419564 14.0667C-0.163929 13.2466 -0.113928 12.4199 0.419564 11.6265V11.6254Z" fill="#E57D21"/>
        </svg>
        
    );
}

function ArrowRight(props) {
    const { style, onClick } = props;
    return (
        <svg className='arowRight btn' style={{ ...style, display: "block" }} onClick={onClick} width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.5814 11.6254L22.6211 0.745377C21.8795 -0.0845422 20.6911 -0.16356 19.9107 0.475283C19.1304 1.11413 19.0018 2.40525 19.6411 3.1856L26.0215 10.9259H1.92063C0.860352 10.9259 0.000488281 11.7858 0.000488281 12.8461C0.000488281 13.9064 0.860318 14.7662 1.92063 14.7662H26.0215L19.6411 22.5065C19.0023 23.2865 19.146 24.5597 19.9107 25.2169C20.6996 25.8946 21.9822 25.7271 22.6211 24.9468L31.5814 14.0667C32.1649 13.2466 32.1149 12.4199 31.5814 11.6265V11.6254Z" fill="#E57D21"/>
        </svg>
        
    );
}

function Review() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 3,
        speed: 500,
        mobileFirst: true,
        prevArrow:<ArrowLeft/>,
        nextArrow:<ArrowRight />,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                centerMode:false,
                slidesToShow:1
              }
            }
        ]
      };

   
    const arr = (int) =>{
        let array=[];
        for (let index = 0; index < int; index++) {
            array.push(index)
        }
        return array
    }

  return (
    <motion.section className='wrapper' id='review'
        initial={{y:'100px', opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1}}
        viewport={{ once: true }}
    >
        <h1>What our Clients say!</h1>
        <Slider {...settings} >
            {
                data.map(item=>(
                    <div className="review-box">
                        <div className="review">
                            <div className="flex">
                                <img src="images/star.png" alt="" className='star'/>
                                <img src="images/star.png" alt="" className='star'/>
                                <img src="images/star.png" alt="" className='star'/>
                                <img src="images/star.png" alt="" className='star'/>
                                <img src="images/star.png" alt="" className='star'/>
                            </div>
                            <p>{item.review}</p>
                            <h5>- {item.name} -</h5>
                        </div>
                    </div>
                ))
            }
        </Slider>
    </motion.section>
  )
}

export default Review

