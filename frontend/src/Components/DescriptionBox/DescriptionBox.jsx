import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          This product is crafted using high-quality materials to ensure comfort,
          durability, and long-lasting performance. Designed with attention to detail,
          it offers a perfect balance of style and functionality. Suitable for everyday
          use as well as special occasions, this product delivers a reliable and
          premium experience you can trust.
        </p>
        <p>
           High-quality, comfortable, and durable product designed for daily wear.
           Perfectly blends modern style with reliable performance.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox