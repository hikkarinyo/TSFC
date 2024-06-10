import { InputProps } from '../types'

import { useTranslation } from 'react-i18next'

import './input.scss'


export const Input = ({ value, label, name, register, error, onChange }: InputProps) => {
    const { t } = useTranslation()

    return (
        <div>
            <input
                className={`input ${error ? 'input__error' : ''}`}
                {...register(name)}
                name={name}
                placeholder={label}
                value={value}
                onChange={onChange}
            />
            <span className={`input__message ${error ? 'input__message-error' : ''}`}>
                { error === 'invalid' ? t('validationErrors.fieldIncorrect') : t('validationErrors.fieldRequired') }
            </span>
        </div>
    )
}
