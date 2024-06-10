import { ModalProps } from '../types'

import CookieConsent from 'react-cookie-consent'

import './modal.scss'


export const Modal = ({ isOpen, onClose }: ModalProps) => {
    const handleClose = () => {
        onClose()
    }

    return (
        <div className={isOpen ? 'modal open' : 'modal'} onClick={handleClose}>
            <div
                className={isOpen ? 'modalContent open' : 'modalContent'}
                onClick={e => e.stopPropagation()}
            >
                <CookieConsent
                    disableStyles
                    enableDeclineButton
                    location="none"
                    buttonText="Allow all cookies"
                    declineButtonText="Reject all cookies"
                    cookieName="cookies"
                    overlay
                    overlayClasses="overlayclass"
                    buttonClasses='button buttonAccess'
                    declineButtonClasses='button buttonDecline'
                    buttonWrapperClasses='buttonWrapperClasses'
                    flipButtons
                    contentClasses='cookieContent'
                    onDecline={() => {
                        handleClose()
                    }}
                    onAccept={() => {
                        handleClose()
                    }}
                >
                    <h2 className='cookieTitle'>Cookies managing</h2>
                    <p className='cookieText'>
                        This website uses cookies. Cookies remember your actions and preferences for a better online
                        experience.
                    </p>
                </CookieConsent>
            </div>
        </div>
    )
}