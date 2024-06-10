import { SvgIcon } from '@common/SvgIcon/SvgIcon.tsx';

import './loader.scss'


export const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-bg">
                <SvgIcon src="loader.svg" className="loader-svg" />
            </div>
        </div>
    )
}
