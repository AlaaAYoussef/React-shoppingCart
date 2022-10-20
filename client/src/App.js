import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import { staticData } from './staticData';

function App() {
  return (
    <div className="layout">
     <Header/>
      <main>{staticData.content}</main>
      <Footer/>
    </div>
  );
}

export default App;
