import { useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Button } from '@common/Button/Button'
import { Input } from '@common/Input/Input'
import { SvgIcon, TelegramIcon } from '@common/SvgIcon/SvgIcon'
import { Textarea } from '@common/Textarea/Textarea'

import './form.scss'
import { schemaClientForm } from '@/helpers/validation'

interface FormDataInterface {
    email: string
    name: string
    phone_number: string
    text: string
}

interface FakeResponse {
    ok: boolean
    json: () => Promise<{ message: string }>
}

const Form = () => {
    const {
        register, handleSubmit,
        formState: { errors }, reset,
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schemaClientForm),
    })
    const [isDisabled, setIsDisabled] = useState(false)
    const [isSend, setIsSend] = useState(false)
    const [errorOccurred, setErrorOccurred] = useState(false)
    const { t } = useTranslation()


    const onSubmit = async (data: FormDataInterface) => {
        const formData = new FormData()
        formData.append('email', data.email)
        formData.append('name', data.name)
        formData.append('phone_number', data.phone_number)
        formData.append('text', data.text)

        try {
            const response: FakeResponse = await fakeFetch()

            if (response.ok) {
                setIsSend(true)
                setIsDisabled(false)
                setErrorOccurred(false)
                reset()
            } else {
                setErrorOccurred(true)
                setIsDisabled(false)
            }
        } catch (error) {
            setErrorOccurred(true)
            setIsDisabled(false)
        }
    }

    const fakeFetch = async (): Promise<FakeResponse> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    ok: true,
                    json: async () => ({ message: 'Success' }),
                })
            }, 1000)
        })
    }

    return (
        <section className='formSection'>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <div  className='formInputs'>
                    <Input
                        label={t('form.nameLabel')}
                        name='name'
                        register={register}
                        error={errors.name?.message}
                    />
                    <Input
                        label={t('form.emailLabel')}
                        name='email'
                        register={register}
                        error={errors.email?.message}
                    />
                    <Input
                        label={t('form.phoneLabel')}
                        name='phone_number'
                        register={register}
                        error={errors.phone_number?.message}
                    />
                    <Textarea
                        label={t('form.commentLabel')}
                        name='text'
                        register={register}
                        error={errors.text?.message}
                    />
                </div>
                <p className='formPolicy'>
                    {t('form.policyText')}
                    <Link className='formLink' to={'#'} target='_blank'> {t('form.policyLink')}</Link>
                </p>
                {isSend
                    ? <div className='formMessage'>
                        <SvgIcon src='success.svg'></SvgIcon>
                        <p className='formMessageText'>
                            {t('form.successMessage')}
                        </p>
                    </div>
                    : errorOccurred // Проверка наличия ошибки
                        ? <div className='formMessage'>
                            <SvgIcon src='error.svg'></SvgIcon>
                            <p className='formMessageText'>
                                {t('form.errorMessage')}
                                <span className='formRestart' onClick={() => setErrorOccurred(false)}>
                                    {t('form.restartSend')}
                                </span>
                            </p>
                        </div>
                        : <Button disabled={isDisabled} type="submit">
                            {isDisabled ? t('form.sendingButton') : t('form.sendButton')}
                        </Button>
                }
            </form>
            <div className='formSocialIcons'>
                <Link to={'#'} target='_blank' className='formLinkIcon'>
                    <TelegramIcon/>
                </Link>
            </div>
        </section>
    )
}

export default Form
