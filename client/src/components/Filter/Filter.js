import React from 'react'
import '../../css/Filter/Filter.css'
import Slide from 'react-reveal/Slide';
import {connect} from 'react-redux'
import {filteredOrder,filteredSize}from '../../store/actions/productsAction'

function Filter(props) {
  return (
    <Slide left>
        {props.filteredProducts &&   <div className='filter-wrapper'>
        <h2 className='filter-title'>Filter</h2>
        <div className='number-of-products'>Number Of Products : {props.filteredProducts.length} Products</div>
        <div className='filter-by-size'>
            <span>Filter</span>
            <select className='filter-select' value={props.size} onChange={(e)=>props.filteredSize(props.products,e.target.value)}>
                <option value="ALL">ALL</option>
                <option value="S">S</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2X">2X</option>
                <option value="3X">3X</option>
            </select>
        </div>
        <div className='filter-by-order' value={props.order} onChange={(e)=>props.filteredOrder(props.filteredProducts,e.target.value)}>
            <span>Order</span>
            <select>
                <option>Latest</option>
                <option>Highest</option>
                <option>Lowest</option>
            </select>
        </div>
        
    </div>}
  
    </Slide>
  )
}

export default connect((state)=>{
    return{
        size:state.products.size,
        sort:state.products.sort,
        products:state.products.products,
        filteredProducts:state.products.filteredProducts,
        
    }
},{
        filteredSize,
        filteredOrder
    })(Filter)