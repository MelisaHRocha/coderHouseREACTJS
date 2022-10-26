import logo from './logo.svg';
import './App.css';
import NavBar  from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import ListContainer from './components/firebase-example/ListContainer';
import DatePicker from './components/DatePicker';
import DatePicker2 from './components/DatePicker2';
import DatePicker3 from './components/DatePicker3';
import Order from './components/Order';

function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path={'/firebase'} element={<ListContainer/>}/>
    <Route path={'/'} element={<ItemListContainer/>}></Route>
    <Route path={'/category/:id'} element={<ItemListContainer/>}></Route>
    <Route path={'/item/:id'} element={<ItemDetailContainer/>}></Route>
    <Route path={'/cart'} element={<Cart/>}></Route>
    <Route path={'/datepicker'} element={<DatePicker/>}></Route>
    <Route path={'/datepicker2'} element={<DatePicker2/>}></Route>
    <Route path={'/datepicker3'} element={<DatePicker3/>}></Route>   
    <Route path={'/order'} element={<Order/>}></Route>
    </Routes>  
    </BrowserRouter> 
    </CartProvider>  
    </>    
  );
}

export default App;
