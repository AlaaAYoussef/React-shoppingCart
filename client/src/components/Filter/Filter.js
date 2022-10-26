import React from 'react'
import '../../css/Filter/Filter.css'

function Filter(props) {
  return (
    <div className='filter-wrapper'>
        <h2 className='filter-title'>Filter</h2>
        <div className='number-of-products'>Number Of Products : 4 Products</div>
        <div className='filter-by-size'>
            <span>Filter</span>
            <select className='filter-select'>
                <option value="ALL">ALL</option>
                <option value="S">S</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2X">2X</option>
                <option value="3X">3X</option>
            </select>
        </div>
        <div className='filter-by-order'>
            <span>Order</span>
            <select>
                <option>Latest</option>
                <option>Highest</option>
                <option>Lowest</option>
            </select>
        </div>
        
    </div>
  )
}

export default Filter