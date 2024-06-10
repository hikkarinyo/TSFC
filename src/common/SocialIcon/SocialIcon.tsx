import { Link } from 'react-router-dom'

import { MailIcon, TelegramIcon, TwitterIcon } from '@common/SvgIcon/SvgIcon'

import './socialLinks.scss'

const SocialLinks = () => {
    return (
        <>
            <Link to={'#'} target='_blank' className='socialLinks'>
                <TelegramIcon/>
            </Link>
            <Link to={'#'} target='_blank' className='socialLinks'>
                <TwitterIcon/>
            </Link>
            <Link to={'mailto:#'} className='socialLinks'>
                <MailIcon/>
            </Link>
        </>
    )
}

export default SocialLinks
