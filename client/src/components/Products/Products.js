import React from "react";

function Products(props) {
  return (
    <div className="products-wrapper">
      {props.products.map((product) => {
        return (
          <div className="product-item" key={product.id}>
            <img src={product.imgURL} alt={product.title}/>
            {/* {console.log(product.imgUrl)} */}
            <div className="product-desc">
              <p>{product.title}</p>
              <span>{product.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
