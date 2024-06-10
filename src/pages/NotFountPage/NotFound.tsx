import { useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Container } from '@common/Container/Container'
import SocialIcon from '@common/SocialIcon/SocialIcon'

import './notFound.scss'
import { selectCurrentLanguage } from '@/features/languageSlice.ts'


const NotFound = () => {
    const { t , i18n } = useTranslation()
    const currentLanguage = useSelector(selectCurrentLanguage)

    useEffect(() => {
        i18n.changeLanguage(currentLanguage)
    }, [currentLanguage, i18n])

    return (
        <section className='notFoundWrapper'>
            <Container className='notFoundContainer'>
                <h1 className='notFoundTitle'>404</h1>
                <div className='notFoundBlock'>
                    <p className='notFoundText'>
                        {t('notFound.errorMessage')}
                        <Link className='notFoundLink' to='/'> {t('notFound.homeLinkText')} </Link>
                        {t('notFound.contactText')}
                    </p>
                    <div className='notFoundSocialIcon'>
                        <SocialIcon/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default NotFound
