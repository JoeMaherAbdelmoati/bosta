import React from "react";
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";

const UnderConstructionPage = ({pageName}) => {
  const [t, i18n] = useTranslation();
  return <div>
    <img src={'/construction.jpg'} className={'bg-image'}/>
    <span className={'absolute-center dark cairo-semi-bold font-18 bg-white p-2 border-radius-10'}>
      {`${t('underConstruction')} ${t(pageName)}`}
    </span>
  </div>
};
UnderConstructionPage.propTypes = {
  pageName: PropTypes.string.isRequired,
}
export default UnderConstructionPage