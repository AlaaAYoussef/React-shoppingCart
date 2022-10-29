import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import data from './data.json'

function App() {
  const [products,setProducts]=useState(data)
  const [size,setSize]= useState("")
  const[order,setOrder]=useState("")
  const handleFilterBySize =(e)=> {
  setSize(e.target.value)
  if(e.target.value=="ALL"){
    setProducts(data)
  }else{
  let clonedProducts = [...products]
  let filteredProducts = clonedProducts.filter((p)=>p.sizes.indexOf(e.target.value)!=1)
  setProducts(filteredProducts)
  }
}
  const handleFilterByOrder=(e)=>{
    const order=e.target.value
    setOrder(order)
    let clonedProducts = [...products]
    let filteredProducts = clonedProducts.sort(function(a,b){
      if(order=="Lowest"){
        return a.price - b.price
      }
      else if(order=="Highest"){
        return b.price-a.price
      }
      else{
        return a.id < b.id ? 1 : -1

      }
      
    })
    setProducts(filteredProducts)
  }
  

  return (
    <div className="layout">
     <Header/>
      <main>
        <div className='wrapper'>
        <Products products={products}/>
        <Filter 
        size={size}
        order={order}
        handleFilterByOrder={handleFilterByOrder}
        handleFilterBySize={handleFilterBySize}
         />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
