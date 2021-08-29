import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Spinner from "react-bootstrap/Spinner";
import {getShipmentDetails} from "../../services/shipment.service";
import {
  dateOptions,
  shortDateNumbersOptions,
  shortDateOptions,
  SOUQ,
  progressColorObject,
  timeOptions, shipmentStatusColor, stateToColor
} from "../../config/index.config";
import Stepper from "./Stepper";
import {getDateFormatted} from "../../utilities/helper";

const TrackShipmentDetails = () => {
  const params = useParams();
  const [t, i18n] = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [shipmentData, setShipmentData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getShipmentDetails(params.id)
      .then(data => {
        setShipmentData(data);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e);
        setIsLoading(false);
      });
  }, [params]);
  if (isLoading) return <div className='absolute-center'><Spinner className={'red'} animation={'border'}/></div>;
  if (error) return (<span className={'absolute-center dark cairo-semi-bold font-18 bg-white p-2 border-radius-10'}>
      {t(error.error)}
    </span>);
  const localeType = i18n.language === "ar" ? "ar" : "en";
  const lastUpdate = getDateFormatted(shipmentData.CurrentStatus.timestamp, localeType, dateOptions);
  const deliverWithin = getDateFormatted(shipmentData.CurrentStatus.timestamp, localeType, shortDateOptions);
  const coloredStateKey = shipmentData.TransitEvents.filter(i => shipmentStatusColor.includes(i.state))[0]?.state;
  const coloredKey = stateToColor[coloredStateKey] || 'normal';
  const shipmentProgressStatusColor = progressColorObject[coloredKey];

  return (
    <div className="container mt-5">
      <div className="row card rtl-ar mx-md-0 mx-2">
        <div className="row">
          <div className="col-md-3 text-left">
            <p className='pl-3 cairo-regular gray'>{t("shipmentNumber", {number: params.id})}</p>
            <p
              className={`pl-3 cairo-semi-bold black ${shipmentProgressStatusColor}`}>{t(shipmentData.CurrentStatus.state)}</p>
          </div>
          <div className="col-md-3 text-left">
            <p className='pl-3 cairo-regular gray'>{t("lastUpdate")}</p>
            <p className='pl-3 cairo-semi-bold black'>{lastUpdate}</p>
          </div>
          <div className="col-md-3 text-left">
            <p className='pl-3 cairo-regular gray'>{t("sellerName")}</p>
            <p className='pl-3 cairo-semi-bold black'>{SOUQ}</p>
          </div>
          <div className="col-md-3 text-left">
            <p className='pl-3 cairo-regular gray'>{t("deliverWithin")}</p>
            <p className='pl-3 cairo-semi-bold black'>{deliverWithin}</p>
          </div>
        </div>
        <div className="row">
          <div className='col-12 d-flex'>
            <span className='hr'/>
          </div>
        </div>
        <div className="row">
          <Stepper statue={shipmentData.CurrentStatus.state} progressColor={shipmentProgressStatusColor}/>
        </div>
        <div className={'row'}>

          <div className="col-md-3 d-md-block d-none text-left">
            <p className='pl-3 cairo-semi-bold black'>{t("TICKET_CREATED")}</p>
          </div>
          <div className="col-md-3 d-md-block d-none text-left">
            <p className='fix-position-2-step cairo-semi-bold black'>{t("PACKAGE_RECEIVED")}</p>
          </div>
          <div className="col-md-3 d-md-block d-none text-left">
            <p className='fix-position-3-step cairo-semi-bold black'>{t("OUT_FOR_DELIVERY")}</p>
          </div>
          <div className="col-md-3 d-md-block d-none text-right">
            <p className='px-3 cairo-semi-bold black'>{t("DELIVERED")}</p>
          </div>
        </div>
      </div>
      <div className="row mt-4 mb-5 rtl-ar">
        <div className="col-md-8">
          <h6 className='cairo-regular text-left'>{t('shipmentDetails')}</h6>
          <div className="table-responsive">
            <table className="table border-gray big-td">
              <thead className='gray cairo-bold bg-light-gray'>
              <tr>
                <th className='text-left' scope="col">{t('branch')}</th>
                <th className='text-left' scope="col">{t('date')}</th>
                <th className='text-left' scope="col">{t('time')}</th>
                <th className='text-left' scope="col">{t('details')}</th>
              </tr>
              </thead>
              <tbody className='black cairo-light'>
              {shipmentData.TransitEvents.map(item => {
                  const date = getDateFormatted(item.timestamp, localeType, shortDateNumbersOptions)
                  const time = getDateFormatted(item.timestamp, localeType, timeOptions);
                  return (<tr>
                    <td className='text-left'>{t(item.hub) || '-'}</td>
                    <td className='text-left'>{date}</td>
                    <td className='text-left'>{time}</td>
                    <td className='text-left'>
                      <span className={'d-block'}>{t(item.state)}</span>
                      <span
                        className={`d-block cairo-extra-light font-12 ${shipmentProgressStatusColor}`}>{t(item.reason)}</span>
                    </td>
                  </tr>)
                }
              )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-4">
          <h6 className='cairo-regular text-left'>{t('deliveryAddress')}</h6>
          <div className="card bg-light-gray text-left">
            <p className='cairo-regular black p-3 m-0'>{t('USER_ADDRESS')}</p>
          </div>
          <div className="card bg-light-gray text-left mt-2 problem-card">
            <div className="items-container d-flex align-items-center justify-content-center">
              <img alt='have-a-problem' src='/have-problem.png' width='150' height='150'/>
              <div className="flex-column text-container">
                <p className='cairo-semi-bold black'>{t('haveProblem')}</p>
                <span className='custom-button'>{t('reportProblem')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrackShipmentDetails;
