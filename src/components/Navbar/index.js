import  './Navbar.scss'
import '../../styles/breakpoints.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

export default function Navbar() {

    /* const iconProps = {
    {...iconProps}
    } */

    return (
        <nav className='nav'>
            <Logo className='logo'/>
            <div className='links'>
                <a href='/' className='link'>INÍCIO</a>
                <a href='/' className='link'>CONTATOS</a>
                <a href='/' className='link'>MEUS PETS</a>
                <a href='/' className='link'>PLANOS</a>
                <a href='/' className='link'>LOGIN</a>
                <a href='/' className='link'>CADASTRO</a>
            </div>
        </nav>
    )
}

