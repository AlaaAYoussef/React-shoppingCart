import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { Provider } from "react-redux";
import store from './store/store'
import Home from "./pages/Home";
import Orders from './pages/Order'
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom'


function App() {
 

  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="layout">
      <Header />
      <main>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/orders" element={<Orders/>} exact></Route>
        </Routes>
      </main>
      <Footer />
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
