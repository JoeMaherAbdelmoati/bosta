import React from "react";
import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {progressStatus} from "../../config/index.config";
import {FaTruckMoving, FaRegEdit} from 'react-icons/fa'
import {MdSave, MdCheck} from 'react-icons/md'

const Stepper = ({statue, progressColor}) => {
  const currentState = progressStatus[statue];

  return <div className={`col-12 px-5 position-relative pb-5 stepper-${progressColor}`}>
    <ProgressBar now={currentState.percentage}/>
    <span className={`step step-1 
    ${currentState.stepsActive >= 1 ? 'active-step' : ''}
     ${currentState.stepsActive > 1 ? 'passed-step' : ''}`}>
  {<MdCheck/>}
  </span>
    <span className={`step step-2 
    ${currentState.stepsActive >= 2 ? 'active-step' : ''}
    ${currentState.stepsActive > 2 ? 'passed-step' : ''}
    `}>
{currentState.stepsActive <= 2 ? <FaRegEdit/> : <MdCheck/>}
  </span>
    <span className={`step step-3 
    ${currentState.stepsActive >= 3 ? 'active-step' : ''}
    ${currentState.stepsActive > 3 ? 'passed-step' : ''}
    `}>
    {currentState.stepsActive <= 3 ? <FaTruckMoving className={'ar-mirror'}/> : <MdCheck/>}
  </span>
    <span className={`step step-4 
    ${currentState.stepsActive >= 4 ? 'active-step' : ''}
    ${currentState.stepsActive > 4 ? 'passed-step' : ''}
    `}>
    {currentState.stepsActive <= 4 ? <MdSave/> : <MdCheck/>}
  </span>
  </div>
};
Stepper.propsType = {
  statue: PropTypes.string.isRequired,
  progressColor: PropTypes.string,
};
Stepper.defaultProps = {
  progressColor: 'normal',
}
export default Stepper;