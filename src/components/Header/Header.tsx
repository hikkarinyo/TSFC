import { Link } from 'react-router-dom'

import { SvgIcon } from '@common/SvgIcon/SvgIcon'

import './header.scss'


const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <SvgIcon src='logo.svg' className='headerLogo'/>
            </Link>
        </header>
    )
}

export default Header