import React, { useState, useEffect } from 'react';
import './Search.css';
import Result from './Result';
import {fetchGeolocation, fetchCurrentGeolocation, fetchTripInfo} from './fetchApi';

function Search({ stateTripInfo, setStateTripInfo, setStateSonar }) {
  const [ stateOrigin, setStateOrigin ] = useState(undefined);
  const [ stateDestination, setStateDestination ] = useState(undefined);

  useEffect(() => {
    if (stateOrigin && stateDestination) {
      fetchTripInfo(stateOrigin, stateDestination, setStateTripInfo)
    }
  }, [ stateOrigin, stateDestination, setStateTripInfo ])
  

  const searchTrip = () => {
    const trip = getInput();
    fetchGeolocation(trip.destination, setStateDestination);
    document.querySelector('input').removeAttribute('hidden');
    document.querySelector('.Search__results').removeAttribute('hidden');

    if (!trip.origin) {
      fetchCurrentGeolocation(setStateOrigin);
      return;
    }

    fetchGeolocation(trip.origin, setStateOrigin);
  }

  const getInput = () => {
    const [ originRaw, destinationRaw ] = document.querySelectorAll('input');
    const origin = originRaw.value.trim().toLowerCase();
    const destination = destinationRaw.value.trim().toLowerCase();

    return { origin, destination }
  }

  return (
    <nav className="Search">
      <div className="Search__header">
        <p>Search journey</p>
      </div>
      <input className="Search__input" type="text" placeholder="current location" hidden></input>
      <input className="Search__input" type="text" placeholder="Hi, where do you want to go?"></input>
      <button className="Search__button" onClick={searchTrip}>Search</button>
      <div className="Search__results">
        { stateTripInfo && stateTripInfo.map((trip, i) => {
          const { Origin, Destination, Product } = trip.LegList.Leg[1];
          return ( <Result key={i} origin={Origin} destination={Destination} product={Product} setStateSonar={setStateSonar}/> );
        })}
      </div>
    </nav>
  );
}

export default Search;