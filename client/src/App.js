import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import data from "./data.json";
import Cart from "./components/Cart/Cart";
import { Provider } from "react-redux";
import store from './store/store'


function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [order, setOrder] = useState("");
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems'))|| []);
 

  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value == "ALL") {
      setProducts(data);
    } else {
      let clonedProducts = [...products];
      let filteredProducts = clonedProducts.filter(
        (p) => p.sizes.indexOf(e.target.value) != 1
      );
      setProducts(filteredProducts);
    }
  };
  const handleFilterByOrder = (e) => {
    const order = e.target.value;
    setOrder(order);
    let clonedProducts = [...products];
    let filteredProducts = clonedProducts.sort(function (a, b) {
      if (order == "Lowest") {
        return a.price - b.price;
      } else if (order == "Highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(filteredProducts);
  }
  const addToCart =(products)=>{
    let clonedCartItems = [...cartItems]
    let isProductExist =false
    clonedCartItems.forEach(p=>{
      if(p.id == products.id){
        p.qty++;
        isProductExist=true
      }
    })
    if(!isProductExist){
      clonedCartItems.push({...products,qty:1})

    }
    setCartItems(clonedCartItems)
  }
  const removeFromCart =(products)=>{
    const clonedCartItems = [...cartItems]
   setCartItems(clonedCartItems.filter(p=> p.id != products.id))
  }
 


  return (
    <Provider store={store}>
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} addToCart={addToCart}/>
          <Filter
            productsLength={products.length}
            size={size}
            order={order}
            handleFilterByOrder={handleFilterByOrder}
            handleFilterBySize={handleFilterBySize}
          />
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
     
      </main>
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
