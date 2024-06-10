import { InputProps } from '../types'

import { useTranslation } from 'react-i18next'

import './textarea.scss'


export const Textarea = ({ value, label, name, onChange, register, error, }: InputProps) => {
    const { t } = useTranslation();

    return (
        <div>
            <textarea
                className={`textarea ${error ? 'textarea__error' : ''}`}
                name={name}
                placeholder={label}
                value={value}
                onChange={onChange}
                {...register(name)}
            />
            <span className={`textarea__message ${error ? 'textarea__message-error' : ''}`}>
                  {t('validationErrors.fieldRequired')}
            </span>
        </div>
    )
}
