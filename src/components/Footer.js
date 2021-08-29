import React from "react";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation();
  return <footer>
    <div className='white bg-dark text-center py-2 cairo-light footer'>{t('footer')}</div>
  </footer>
};
export default Footer;