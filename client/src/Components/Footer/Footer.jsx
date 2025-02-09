import React from 'react'

import footerCSS from './../Footer/Footer.module.css'


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

        
    </div>
  )
}

export default Footer   

