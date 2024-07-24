import { useTranslation } from "react-i18next";

export const useTranslate = (ns?: [string]) => {
    const { t } = useTranslation(ns);
    return t;
};