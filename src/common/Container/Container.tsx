import { ContainerProps } from '../types.ts'

import './container.scss'


export const Container = ({ children, className }: ContainerProps) => (
    <div className={`container ${className}`}>{children}</div>
)
