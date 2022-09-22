
import '../App.css';
import CardWidget  from './CardWidget';

const styles = {
    padding: '10px',
    display: 'flex',
    justify: 'center', 
}


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
                        Parent
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-primary text-primary-content">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                     
                        </ul>
                    </li>
                    <li><a>Contacto</a></li>
            
                    </ul>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <CardWidget></CardWidget>
                        </div>
                    </label>
                    
                </div>
                </div>
        </>
    )
}

export default NavBar