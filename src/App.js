
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './Components/Pages/Contacts/Contacts';
import Cart from './Components/Pages/CartPage/Cart/Cart';
import HomePage from './Components/Pages/HomePage/Home.page';
import About from './Components/Pages/About/About';
import Promo from './Components/Pages/Promo/Promo';
import Installment from './Components/Pages/Installment/Installment';
import Service from './Components/Pages/Service/Service';
import Wholesale from './Components/Pages/Wholesale/Wholesale';
import Hoverboards from './Components/Pages/Catalog/Hoverboards/Hoverboards';
import Favorite from './Components/Pages/FavoritePage/Favorite';






function App() {

  return (
    <div className="App">
   <Routes>

   <Route path ="/" element={<HomePage/>}/>
   <Route path='/cart' element={<Cart/>}/>

   <Route path='/contacts' element ={<Contacts/>}/>

   
   <Route path='/about'  element ={<About/>}/>
   <Route path='/promo'  element ={<Promo/>}/>
   <Route path='/installment'  element ={<Installment/>}/>
   <Route path='/service'  element ={<Service/>}/>
   <Route path='/wholesale'  element ={<Wholesale/>}/>
   <Route path='/catalog/hoverboards' element ={<Hoverboards/>}/>
   <Route path='/favorite' element ={ <Favorite/>} />

   </Routes>
 
      
    </div>
  );
}

export default App;
