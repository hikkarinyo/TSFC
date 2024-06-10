import { LanguageSwitcherProps } from '../types'

import './languageSwitcher.scss'


const LanguageSwitcher = ({ languages, defaultLanguage, onChange }: LanguageSwitcherProps) => {
    const handleTabClick = (language: string) => {
        if (language !== defaultLanguage) {
            onChange(language)
        }
    }

    return (
        <div className='languageSwitcher'>
            {languages.map((language) => (
                <button
                    key={language}
                    className={`languageButton ${language === defaultLanguage  ? 'activeTab' : ''}`}
                    onClick={() => handleTabClick(language)}
                >
                    {language}
                </button>
            ))}
        </div>
    )
}

export default LanguageSwitcher
