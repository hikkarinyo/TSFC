import { useTranslation } from 'react-i18next';

import { AppDownloadLink } from '@common/AppDownloadButton/AppDownloadLink'
import { Container } from '@common/Container/Container'
import { Image } from '@common/Image/Image'
import { AppStoreIcon, GooglePlayIcon } from '@common/SvgIcon/SvgIcon'

import './banner.scss'


interface BannerProps {
    id: string
}

const Banner = ({ id }: BannerProps) => {
    const { t } = useTranslation()

    return (
        <section id={id} className='bannerWrapper'>
            <Container>
                <div className='bannerSection'>
                    <div className='bannerContent'>
                        <div className='bannerTextSection'>
                            <h1 className='bannerTitle'>
                                The Second Financial Coming
                            </h1>
                            <p className='bannerDescription'>
                                {t('banner.bannerDescription')}
                            </p>
                        </div>
                        <div className='bannerAppLinks'>
                            <AppDownloadLink link={'#'}><GooglePlayIcon/></AppDownloadLink>
                            <AppDownloadLink link={'#'}><AppStoreIcon/></AppDownloadLink>
                        </div>
                    </div>
                    <Image
                        image='iPhone2016.png'
                        imageWebp='iPhone16.webp'
                        image2x='iPhone16@2x.png'
                        className='bannerImage'
                        alt='iPhone'
                    />
                </div>
            </Container>
            <div className="bannerRightAngle"></div>
            <div className="bannerLeftAngle"></div>
        </section>
    )
}

export default Banner