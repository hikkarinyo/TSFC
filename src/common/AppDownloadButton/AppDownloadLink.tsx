import { AppDownloadLinkProps } from '../types'

import { Link } from 'react-router-dom'

import './appDownloadLink.scss'


export const AppDownloadLink = ({ link, children }: AppDownloadLinkProps) => (
    <Link className='link' to={link} target='_blank'>
        {children}
    </Link>
)
