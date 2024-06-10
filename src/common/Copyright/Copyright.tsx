import {CopyrightProps} from '../types.ts'

import './copyright.scss'


const Copyright = ({ className }: CopyrightProps) => {

    return (
        <p className={`copyright ${className}`}>
            Copyright 2023-2024, TSFC. All Rights reserved.<br/>
            Liquidity Solutions Sp. z O.O.<br/>
            KRS:0001021225 | NIP: 8241818054 | Registered in the Register of virtual currency activities of Poland under
            the number RDWW-684
        </p>
    )
}

export default Copyright
