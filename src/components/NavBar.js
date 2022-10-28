import '../App.css';
import CardWidget  from './CardWidget';
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <>
            <div className="navbar bg-primary text-primary-content" id="navbar">
                <div className="flex-1">
                <Link to='/'className="Intro">Hostel do Moro</Link>
                </div>
                <div className="flex-none">
                <ul className="menu menu-horizontal p-0">        
                    <li tabIndex={0}>
                        <a className="Categoria">
                        Categoría
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-primary text-primary-content">
                        <li><Link to='/category/1'>Compartido</Link></li>
                        <li><Link to='/category/2'>Privadas</Link></li>                
                        </ul>
                    </li>     
                    </ul>
                    <div className="dropdown dropdown-end">                    
                    <CardWidget></CardWidget>
                    </div>
                </div>
            </div>               
        </>
    )
}

export default NavBar