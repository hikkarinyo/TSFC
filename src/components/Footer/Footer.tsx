import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import Copyright from '@common/Copyright/Copyright'
import SocialIcon from '@common/SocialIcon/SocialIcon'
import { SvgIcon } from '@common/SvgIcon/SvgIcon'

import './footer.scss'
import { selectCurrentLanguage } from '@/features/languageSlice'
import { getLinkToDocument } from '@/helpers/getLinkToDocument';

const footerLinks = [
    { key: 'doc', label: 'footer.userAgreementLink' },
    { key: 'doc', label: 'footer.kycPolicyLink' },
]


const Footer = () => {
    const { t } = useTranslation()
    const currentLanguage = useSelector(selectCurrentLanguage)

    return (
        <footer className='footer'>
            <div className='footerWrapper'>
                <Link to='/' className='footerLogo'>
                    <SvgIcon src='logo.svg' height='30'/>
                </Link>
                <nav className='footerNav'>
                    <NavLink
                        className='footerLink'
                        to='mailto:#'
                        target='_blank'
                    >
                        {t('footer.supportLink')}
                    </NavLink>
                    {footerLinks.map((link) => (
                        <a
                            key={link.key}
                            className='footerLink'
                            href={getLinkToDocument(link.key, currentLanguage)}
                            target='_blank'
                            rel='nofollow'
                        >
                            {t(link.label)}
                        </a>
                    ))}
                </nav>
                <div className='footerLine'></div>
                <Copyright className='footerCopyright'/>
                <div className='footerSocialLinkSection'>
                    <SocialIcon/>
                </div>
            </div>
            <div className='gradient'></div>
        </footer>
    )
}
export default Footer