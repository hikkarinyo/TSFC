import React, { useEffect, useRef,useState } from 'react'

import { MessageIcon, TopIcon } from '@common/SvgIcon/SvgIcon'

import './scrollButton.scss'
interface ButtonData {
    id: string
    icon: React.ReactNode
}

const ScrollButton: React.FC = () => {
    const buttonsData: ButtonData[] = [
        { id: 'bannerId', icon: <TopIcon /> },
        { id: 'financialServicesSectionId', icon: <MessageIcon /> },
    ]

    const [isActive, setIsActive] = useState<string>(buttonsData[0].id)

    const handleButtonClick = (id: string) => {
        const targetElement = document.getElementById(id)
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const buttonRefs = buttonsData.reduce((acc, { id }) => {
        acc[id] = useRef<HTMLButtonElement>(null)
        return acc
    }, {} as Record<string, React.RefObject<HTMLButtonElement>>)

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsActive(entry.target.id)
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        })

        buttonsData.forEach(({ id }) => {
            const buttonRef = buttonRefs[id]
            const targetElement = document.getElementById(id)

            if (buttonRef.current && targetElement) {
                observer.observe(targetElement)
            }
        })

        return () => {
            observer.disconnect()
        }
    }, [buttonRefs, buttonsData])

    return (
        <div className='buttonContainer'>
            {buttonsData.map(({ id, icon }) => (
                <button
                    key={id}
                    ref={buttonRefs[id]}
                    className={`buttonIcon ${isActive === id ? 'active' : ''}`}
                    onClick={() => handleButtonClick(id)}
                >
                    {icon}
                </button>
            ))}
        </div>
    )
}

export default ScrollButton
