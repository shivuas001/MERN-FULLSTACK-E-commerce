import React from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
  return (
    <div className='add-product'>
       <div className="addproduct-itemfield">
         <p>Product Title</p>
         <input type="text" name='name' placeholder='Type Here' />
       </div>
       <div className="addproduct-price">
         <div className="addproduct-itemfield">
           <p>Price</p>
           <input type="text" name="old_price" placeholder='Type Here' />
         </div>
         <div className="addproduct-itemfield">
           <p>Offer Price</p>
           <input type="text" name="new_price" placeholder='Type Here' />
         </div>
       </div>
       <div className="addproduct-itemfield">
         <p>Category</p>
         <select name="category" className='addproduct-selector'>
           <option value="men">Men</option>
           <option value="women">Women</option>
           <option value="kid">Kid</option>
         </select>
       </div>
       <div className="addproduct-itemfield">
         <label htmlFor="file-input">
          <img src={upload_area} className='addproduct-thumnail-img' alt="" />
          <input type="file" name='image' id='file-input' hidden/>
         </label>
       </div>
       <button className='addproduct-btn'>Add</button>
    </div>
  )
}

export default AddProduct