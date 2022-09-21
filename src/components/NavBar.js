
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
            <nav className="menu">
                <a href="#" className='logo nav-link'>Hostel Do Moro</a>
                <ul className='nav-menu'>
                    <li className='nav-menu-item'><a href="#" className='nav-link'>Reservas</a></li>
                    <li className='nav-menu-item'><a href="#" className='nav-link'>Galeria</a></li>
                    <li className='nav-menu-item'><a href="#" className='nav-link'>Ubicación</a></li>
                    <li className='nav-menu-item'><a href="#" className='nav-link'>Contacto</a></li>
                    <CardWidget></CardWidget>
                </ul>       
            </nav>
        </>
    )
}

export default NavBar