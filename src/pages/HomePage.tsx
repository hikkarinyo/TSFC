import { useEffect, useState } from 'react'

import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Banner from '@components/Banner/Banner'
import FinancialServicesSection from '@components/FinancialServicesSection/FinancialServicesSection'

import LanguageSwitcher from '@common/LanguageSwitcher/LanguageSwitcher'
import { Modal } from '@common/Modal/Modal'
import ScrollButton from '@common/ScrollButton/ScrollButton'

import { selectCurrentLanguage, setLanguage } from '@/features/languageSlice.ts'


const HomePage = ({ lang }: { lang: string }) => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    const currentLanguage = useSelector(selectCurrentLanguage)
    const navigate = useNavigate()

    const cookies = Cookies.get('cookies')

    const [isOpen, setIsOpen] = useState(!cookies)

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const handleLanguageChange = (selectedLanguage: string | undefined) => {
        dispatch(setLanguage(selectedLanguage))
        i18n.changeLanguage(selectedLanguage)
        navigate(`/${selectedLanguage}`)
    }

    useEffect(() => {
        if (cookies) {
            setIsOpen(false)
        }

        // чтобы при перезагрузке вставлялся язык из state
        i18n.changeLanguage(currentLanguage)

        if (lang && lang !== currentLanguage) {
            dispatch(setLanguage(lang))
            i18n.changeLanguage(lang)
        }

    }, [lang, currentLanguage, i18n, dispatch])

    return (
        <>
            <LanguageSwitcher
                languages={['eng', 'ru', 'pol']}
                defaultLanguage={currentLanguage}
                onChange={handleLanguageChange}
            />
            <Banner id='bannerId'/>
            <FinancialServicesSection id='financialServicesSectionId'/>
            <Modal isOpen={isOpen} onClose={handleCloseModal}/>
            <ScrollButton />
        </>
    )
}

export default HomePage
