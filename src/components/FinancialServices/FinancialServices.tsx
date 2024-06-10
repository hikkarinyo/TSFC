import { useTranslation } from 'react-i18next'

import './financialServices.scss'

const FinancialServicesData = {
    title: 'financialServices.title',
    services: [
        'financialServices.services.trade',
        'financialServices.services.portfolio',
        'financialServices.services.familyOffice',
        'financialServices.services.educationalPrograms',
    ],
}

const FinancialServices = () => {
    const { t } = useTranslation()

    return (
        <div className='financialServicesWrapper'>
            <div className="financialServicesAngle"></div>
            <h2 className='financialServicesTitle'>{t(FinancialServicesData.title)}</h2>
            <ul className='financialServicesList'>
                {FinancialServicesData.services.map((serviceKey, index) => (
                    <li className='financialServicesItem' key={index}>
                        {t(serviceKey)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FinancialServices
