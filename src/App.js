import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import {Routes,Route} from 'react-router-dom'
import Home from './page/Home';
import Mens from './page/Mens';
import Wishlist from './page/Wishlist';
import Cart from './page/Cart';
import Painting from './page/Painting';
import Login from './page/Login';
import RequireAuth from './context/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mens' element={<RequireAuth><Mens/></RequireAuth>}/>
        <Route path='/painting' element={<Painting/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
