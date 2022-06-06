
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Pages/CartPage/Cart/Cart';
import HomePage from './Components/Pages/HomePage/Home.page';





function App() {

  return (
    <div className="App">
   <Routes>

   <Route path ="/" element={<HomePage/>}/>
   <Route path='/cart' element={<Cart/>}/>

   </Routes>
 
      
    </div>
  );
}

export default App;
