import React from 'react';
import aboutCSS from './../About/About.module.css'

import aboutImg1 from './../../assets/restaurant.jpg'
import aboutImg2 from './../../assets/burger1.webp'

function About () {
  return (
    <div className={`${aboutCSS.About_wrapper} section`} id='about'>
        <div className={aboutCSS.aboutImg}>
            <img src={aboutImg1} alt="about-image" />
            
        </div>
        <div className={aboutCSS.aboutContent}>
            <small className='section_title'>About Us</small>
            <h1>Simply Flawless ! Deliciously <span>Fresh & Lush Flavours</span>.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur hic aspernatur, dolor laboriosam deleniti in. Fugiat officia accusantium, ex expedita dolores natus consequuntur facere beatae qui fuga rem blanditiis autem!</p>


            <div className={aboutCSS.about_btns}>
                <button>Read More</button>
                <a href='#'>
                    <i className='ri-phone-line'></i>
                    455 4887 955
                </a>
            </div>
        </div>
            
        <div className={aboutCSS.aboutImg}>
            <img src={aboutImg2} alt="about-image" />
        </div>

    </div>
  )
}

export default About