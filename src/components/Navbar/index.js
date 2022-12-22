import  './Navbar.scss'
import '../../styles/breakpoints.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {

    /* const iconProps = {
    {...iconProps}
    } */

    const routes = [{
        label: 'Home',
        to: '/'
      },
      {
        label: 'Meus Pets',
        to: '/meuspets'
      }
    ];

    return (
        <nav className='nav'>
            <Logo className='logo'/>
            <ul className='links'>
                {routes.map((route,index) => (
                    <li key={index}>
                        <Link to={route.to} className='link'>
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

