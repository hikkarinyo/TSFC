import FinancialServices from '../FinancialServices/FinancialServices'
import Form from '../Form/Form'

import './financialServicesSection.scss'


interface FinancialServicesSectionProps {
    id: string
}

const FinancialServicesSection = ({ id }: FinancialServicesSectionProps) => {
    return (
        <div id={id} className="financialServicesSection">
            <div className="innerContainer">
                <div className="formContainer">
                    <Form/>
                </div>
                <div className="textContainer">
                    <FinancialServices/>
                </div>
            </div>
        </div>
    )
}

export default FinancialServicesSection
