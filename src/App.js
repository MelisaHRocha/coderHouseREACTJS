import logo from './logo.svg';
import './App.css';
import NavBar  from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path={'/'} element={<ItemListContainer/>}></Route>
    <Route path={'/category/:id'} element={<ItemListContainer/>}></Route>
    <Route path={'/item/:id'} element={<ItemDetailContainer/>}></Route>
    <Route path={'/cart'} element={<Cart/>}></Route>
    </Routes>  
    </BrowserRouter> 
    </CartProvider>  
    </>    
  );
}

export default App;
