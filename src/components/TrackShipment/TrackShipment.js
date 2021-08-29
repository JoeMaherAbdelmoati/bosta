import React, {useState} from "react";
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";
import {GoSearch} from 'react-icons/go';
import {useHistory} from "react-router-dom";

import {debounce} from "../../utilities/helper";
import {NotificationManager} from "react-notifications";

const debouncedFunc = ({history, value, t, searchFn}) => debounce(() => {
  if (value && /^\d+$/.test(value)) {
    history.push(`/trackShipment/${value}`)
    searchFn()
  } else {
    NotificationManager.warning(t('numberOnly'), t('error'))
  }
}, 200, true);
const TrackShipment = ({searchFn}) => {
  const history = useHistory();
  const [t, i18n] = useTranslation();
  const [value, setValue] = useState('');
  return (<>
    <h4 className='cairo-semi-bold'>{t('header.trackYourShipment')}</h4>
    <p className='cairo-regular font-16'>{t('header.enterTrackNo')}</p>
    <label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter')
            debouncedFunc({history, value, t, searchFn})()
        }}
        className='form-control d-inline-block w-75'
        placeholder={t('header.trackNo')}/>
      <span onClick={debouncedFunc({history, value, t, searchFn})} className={'rounded-circle bg-red p-2 ml-2 pointer'}>
        <GoSearch className={'white'}/></span>
    </label></>)
};
TrackShipment.propTypes = {
  searchFn: PropTypes.func,
};
TrackShipment.defaultProps = {
  searchFn: () => {
  },
}
export default TrackShipment;