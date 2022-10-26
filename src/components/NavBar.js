
import '../App.css';
import CardWidget  from './CardWidget';
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <>
            <div className="navbar bg-primary text-primary-content">
                <div className="flex-1">
                <Link to='/'className="btn btn-ghost normal-case text-xl">Hostel do Moro</Link>
                </div>
                <div className="flex-none">
                <ul className="menu menu-horizontal p-0">               
                    <li><Link to='/reservas'>Reservas</Link></li>
                    <li tabIndex={0}>
                        <a>
                        Categoría
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-primary text-primary-content">
                        <li><Link to='/category/1'>Compartido</Link></li>
                        <li><Link to='/category/2'>Privadas</Link></li>                
                        </ul>
                    </li>
                    <li><a>Contacto</a></li>
                    <li><a>Ubicacion</a></li>         
                    </ul>
                    <div className="dropdown dropdown-end">                    
                    <CardWidget></CardWidget>
                    </div>
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" style={{color: 'black' }}>
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
                </div>               
        </>
    )
}

export default NavBar