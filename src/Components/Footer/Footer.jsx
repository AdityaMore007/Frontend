import React from 'react'

import footerCSS from './../Footer/Footer.module.css'

import post1 from './../../assets/domino-s-pizza.jpg'
import post2 from './../../assets/pizza12.jpg'
import footerElement from './../../assets/delivery2.jpg'

function Footer () {
  return (
    <div className={`${footerCSS.Footer_wrapper} section`}>

        <img src={footerElement} alt="footer-element"  id={footerCSS.element1}/>
        <div className={footerCSS.footer_links}>
            <h4>Luxera</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolores omnis, molestiae voluptas eveniet maiores obcaecati, eius optio porro tempora inventore provident ullam ab modi repellat iusto odit. Provident, corrupti?</p>
            <div className={footerCSS.social}>
                <i className='ri-facebook-line'></i>
                <i className='ri-instagram-line'></i>
                <i className='ri-twitter-x-line'></i>
            </div>
        </div>

        <div className={footerCSS.footer_links}>
            <h4>Our Menu</h4>
            <p><a href="#">Breakfast</a></p>
            <p><a href="#">Lunch</a></p>
            <p><a href="#">Dinner</a></p>
            <p><a href="#">Salad</a></p>
            <p><a href="#">Korean Food</a></p>
        </div>

        <div className={footerCSS.footer_links}>
            <h4>Resources</h4>
            <p><a href="">Home</a></p>
            <p><a href="">Menu</a></p>
            <p><a href="">Categories</a></p>
            <p><a href="">Contact</a></p>
            <p><a href="">Branches</a></p>
        </div>

        <div className={footerCSS.footer_links}>
            <h4>Recent Post</h4>

            <div className={footerCSS.Post_container}>
                <img src={post1} alt="blog-post" />
                <div className={footerCSS.footer_info}>
                    <small><i className='ri-calender-line'></i>March 27 ,24</small>
                    <h4>Dining In Paris - </h4>
                    <h4>Explore Them in Town</h4>
                </div>
            </div>
            <div className={footerCSS.Post_container}>
                <img src={post2} alt="blog-post" />
                <div className={footerCSS.footer_info}>
                    <small><i className='ri-calender-line'></i>March 27 ,24</small>
                    <h4>MouthWatering Recipes -  </h4>
                    <h4>For Home Cooking</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer   

