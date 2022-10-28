import logo from './logo.svg';
import './App.css';
import NavBar  from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import ListContainer from './components/firebase-example/ListContainer';
import DatePicker from './components/DatePicker/DatePicker';
import DatePicker2 from './components/DatePicker/DatePicker2';
import DatePicker3 from './components/DatePicker/DatePicker3';
import Order from './components/Order';
import UserForm from './components/UserForm';
import UseForm2 from './components/UseFrom2';
import PurchaseDetail from './components/PurchaseDetail';
import UseForm3 from './components/UseForm3';

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
    <Route path={'/useform2'} element={<UseForm2/>}></Route>
    <Route path={'/purchaseDetail'} element={<PurchaseDetail/>}></Route>
    </Routes>  
    </BrowserRouter> 
    </CartProvider>  
    </>    
  );
}

export default App;
