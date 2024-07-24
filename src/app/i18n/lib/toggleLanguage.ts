import i18next from "i18next";

export const toggleLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
};