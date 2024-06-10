import { ButtonProps } from '../types'

import './button.scss'

export const Button = ({ children, onClick, disabled }: ButtonProps) => (
    <button className='button' onClick={onClick} type='submit' disabled={disabled}>
        {children}
    </button>
)
