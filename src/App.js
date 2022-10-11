import logo from './logo.svg';
import './App.css';
import NavBar  from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path={'/'} element={<ItemListContainer/>}></Route>
    <Route path={'/category/:id'} element={<ItemListContainer/>}></Route>
    <Route path={'/item/:id'} element={<ItemDetail/>}></Route>
    </Routes>  
    </BrowserRouter>   
    </>    
  );
}

export default App;
