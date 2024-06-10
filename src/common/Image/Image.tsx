import { ImageType } from '../types.ts'

import './image.scss'


export const Image = ({ imageWebp, image, alt, className, image2x }: ImageType) => {
    return (
        <div className={`image-container ${className}`}>
            <picture>
                <source srcSet={`/images/${imageWebp} 1x, /images/${image2x} 2x`}/>
                <img
                    className={`adaptive-image ${className}`}
                    src={`/images/${image}`}
                    alt={alt}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                    loading="lazy"
                />
            </picture>
        </div>
    )
}
