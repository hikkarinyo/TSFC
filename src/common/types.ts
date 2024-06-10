import React from 'react'

export interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
}

export interface AppDownloadLinkProps {
    children: React.ReactNode
    link: string
}

export interface SvgIconProps {
    src?: string
    width?: string
    height?: string
    className?: string
}

export interface LanguageSwitcherProps {
    languages: string[]
    defaultLanguage: string
    onChange: (language: string) => void
}

export type ImageType = {
    image: string
    image2x: string
    imageWebp: string
    alt?: string
    className?: string
}

export interface ContainerProps {
    children: React.ReactNode
    className?: string
}

export interface InputProps {
    label: string
    value?: string
    name: string
    onChange?: () => void
    error?: string
    register?: any
}

export interface SocialLinksProps {
    width: string
}

export interface CopyrightProps {
    className?: string
}

export interface ModalProps {
    isOpen: boolean
    onClose: () => void
}