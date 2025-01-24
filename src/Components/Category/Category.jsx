import React from 'react'
import categoryCSS from './../Category/Category.module.css'

import categoryImg1 from './../../assets/menu-img3.jpg'
import categoryImg2 from './../../assets/menu-img4.webp'
import categoryImg3 from './../../assets/menu-img.jpg'
import categoryImg4 from './../../assets/menu-img2.jpg'

function Category () {
  return (
    <div className={`${categoryCSS.Category_wrapper} section`}>
        <small className='section_title'>Our Delicious Food Categories</small>
        <h1>Our <span>Special Categories</span></h1>

        <div className={categoryCSS.category_cards}>
            <div className={categoryCSS.card} count='1'>
                <img src={categoryImg1} alt="category-image" />
                <div className={categoryCSS.category_info}>
                    <h2>Morning Quick Fast</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deserunt provident nisi laudantium quibusdam nemo atque repellat deleniti placeat reiciendis!</p>
                    <button>Book a Seat</button>
                </div>
            </div>
            <div className={categoryCSS.card} count='2'>
                <img src={categoryImg2} alt="category-image" />
                <div className={categoryCSS.category_info}>
                    <h2>Lunch Packs</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deserunt provident nisi laudantium quibusdam nemo atque repellat deleniti placeat reiciendis!</p>
                    <button>Book a Seat</button>
                </div>
            </div>
            <div className={categoryCSS.card} count='3'>
                <img src={categoryImg3} alt="category-image" />
                <div className={categoryCSS.category_info}>
                    <h2>Heavy Dinner Packs</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deserunt provident nisi laudantium quibusdam nemo atque repellat deleniti placeat reiciendis!</p>
                    <button>Book a Seat</button>
                </div>
            </div>
            <div className={categoryCSS.card} count='4'>
                <img src={categoryImg4} alt="category-image" />
                <div className={categoryCSS.category_info}>
                    <h2>Delicious Fast Food</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deserunt provident nisi laudantium quibusdam nemo atque repellat deleniti placeat reiciendis!</p>
                    <button>Book a Seat</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category