import React from 'react'

import testimonialCSS from './../Testimonials/Testimonials.module.css'
import { Swiper,SwiperSlide } from 'swiper/react'
import "swiper/css";
import { Autoplay } from 'swiper/modules';

function Testimonial () {
  return (
    <div className={`${testimonialCSS.Testimonials_Wrapper} section`} id='testimonials'>
        <Swiper 
            className={testimonialCSS.swiper}
            autoplay={{
                delay: 2500,
            }}
            spaceBetween={30}
            speed={1500}
            loop = {true}

            modules={[Autoplay]}
        >
            <SwiperSlide>
                <div className={testimonialCSS.Testimonials_Container}>
                    <div className={testimonialCSS.ratings}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-line'></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi ducimus cupiditate dolorem repellendus illum ea maiores non. Modi, a esse placeat excepturi eius architecto amet adipisci officiis dolorum id.</p>
                    <h3>John Doe <span>Executive Chef</span></h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className={testimonialCSS.swiper}>
                <div className={testimonialCSS.Testimonials_Container}>
                    <div className={testimonialCSS.ratings}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-line'></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi ducimus cupiditate dolorem repellendus illum ea maiores non. Modi, a esse placeat excepturi eius architecto amet adipisci officiis dolorum id.</p>
                    <h3>Samantha Joy<span>Executive Chef</span></h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className={testimonialCSS.swiper}>
                <div className={testimonialCSS.Testimonials_Container}>
                    <div className={testimonialCSS.ratings}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-line'></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi ducimus cupiditate dolorem repellendus illum ea maiores non. Modi, a esse placeat excepturi eius architecto amet adipisci officiis dolorum id.</p>
                    <h3>Elizabeth Swan <span>Executive Chef</span></h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className={testimonialCSS.swiper}>
                <div className={testimonialCSS.Testimonials_Container}>
                    <div className={testimonialCSS.ratings}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-line'></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi ducimus cupiditate dolorem repellendus illum ea maiores non. Modi, a esse placeat excepturi eius architecto amet adipisci officiis dolorum id.</p>
                    <h3>Jack Sparrow <span>Executive Chef</span></h3>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial