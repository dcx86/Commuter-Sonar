import React, { useState, useEffect } from 'react';
import './Search.css';
import Result from './Result';
import {fetchGeolocation, fetchCurrentGeolocation, fetchResults} from './fetchApi';

function Search({ setStateSonar }) {
  const [ stateResults, setStateResults ] = useState(undefined);
  const [ stateOrigin, setStateOrigin ] = useState(undefined);
  const [ stateDestination, setStateDestination ] = useState(undefined);

  useEffect(() => {
    if (stateOrigin && stateDestination) {
      fetchResults(stateOrigin, stateDestination, setStateResults)
    }
  }, [ stateOrigin, stateDestination, setStateResults ])
  

  const searchTrip = () => {
    const search = getInput();
    fetchGeolocation(search.destination, setStateDestination);
    document.querySelector('input').removeAttribute('hidden');
    document.querySelector('.Search__results').removeAttribute('hidden');

    if (!search.origin) {
      fetchCurrentGeolocation(setStateOrigin);
      return;
    }

    fetchGeolocation(search.origin, setStateOrigin);
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
        { stateResults && stateResults.map((trip, i) => {
          const { Origin, Destination, Product } = trip.LegList.Leg[1];
          return ( <Result key={i} origin={Origin} destination={Destination} product={Product} setStateSonar={setStateSonar}/> );
        })}
      </div>
    </nav>
  );
}

export default Search;