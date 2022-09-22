
import '../App.css';
import CardWidget  from './CardWidget';

function NavBar(){
    return(
        <>
            <div className="navbar bg-primary text-primary-content">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Hostel do Moro</a>
                </div>
                <div className="flex-none">
                <ul className="menu menu-horizontal p-0">               
                    <li><a>Reservas</a></li>
                    <li tabIndex={0}>
                        <a>
                        Servicios
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-primary text-primary-content">
                        <li><a>Piscina</a></li>
                        <li><a>Nature Views</a></li>
                        <li><a>Galeria</a></li>                    
                        </ul>
                    </li>
                    <li><a>Contacto</a></li>
                    <li><a>Ubicacion</a></li>         
                    </ul>
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
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