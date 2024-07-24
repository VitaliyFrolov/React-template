import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    useEffect(() => {
    const handleLanguageChange = () => {
        setLanguage(i18n.language);
    }

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
        i18n.off('languageChanged', handleLanguageChange);
    };
    }, [i18n]);

    return language;
};