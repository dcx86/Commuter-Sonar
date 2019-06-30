import React from 'react';
import icon from './icons/hearing.svg';
import './Sonar.css';
import { getUnixTime } from './parsing';
import setSonar from './setSonar';
import Countdown from 'react-countdown-now';

function Sonar({stateSonar}) {
  
  const getDeadline = () => {
    if(stateSonar) {
      const { date, time } = stateSonar.origin
      return getUnixTime({ date, time })
    }
  }

  const saveAlarm = () => {
    const { date, time } = stateSonar.origin
    if (stateSonar) setSonar({ date, time });
    document.querySelector('.Sonar__setAlarm').className = "Sonar__alarm";
    document.querySelector('.Sonar__button').setAttribute('hidden', true);
  }

  return (
    <div className="Sonar">

      <div className="Sonar__setAlarm">
        <div className="Sonar__alarm__header">
          { stateSonar && <h1>{stateSonar.product.name}</h1> }
        </div>
        <img src={icon} className="Sonar__alarm__logo" alt="logo" />
        <div className="Sonar__body">
          { stateSonar && <p>{ stateSonar.origin.name }</p> }
          { stateSonar && <p>{ stateSonar.origin.time }</p> }
          { stateSonar && <p>{ stateSonar.destination.name }</p>}
          { stateSonar && <p>{ stateSonar.destination.time }</p>}
          { stateSonar && <p>in</p>}
          { stateSonar && <Countdown date={getDeadline()}/> }
        </div>
          { true && <button className="Sonar__button" onClick={saveAlarm}>SET SONAR</button> }
      </div>

    </div>
  );
}

export default Sonar