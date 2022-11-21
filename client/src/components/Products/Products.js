import React, { useEffect, useState,componentDidMount} from "react";
import '../../css/Products/Products.css'
import ProductModal from './ProductModal'
import Bounce from 'react-reveal/Bounce';
import {connect,useDispatch} from 'react-redux'
import fetchProducts from "../../store/actions/productsAction";


  function Products(props) {

  
   const [product,setProduct] =useState("")
  const openModal = (product)=>{
    setProduct(product)
  }
  const closeModal =()=>{
    setProduct(false)
  }
 
  useEffect(()=>{
   props.fetchProducts()
    },[])
  return (
    <Bounce left cascade>
    <div className="products-wrapper">
      {props.products.map((product) => (
        <div className="product-item" key={product.id}>
          <a href="#" onClick={()=>openModal(product)}>
          <img src={product.imgURL} alt={product.title} />
          </a>
          <div className="product-desc">
            <p>{product.title}</p>
            <span>${product.price}</span>
          </div>
          <button onClick={()=>props.addToCart(product)}>Add To Cart</button>
        </div>
      ))}
      <ProductModal product={product} closeModal={closeModal}/>
    </div>
    </Bounce>
  );
}
const mapStateToProps=(state)=>{
  return {products:state.products.filteredProducts}
  
}


export default connect (mapStateToProps,fetchProducts)(Products)
