import React, { useState } from 'react';
import Header from './Header';
import Search from './Search';
import Workspace from './Workspace';
import Footer from './Footer';

import './App.css';

function App() {
  const [ stateTripInfo, setStateTripInfo ] = useState(undefined);
  const [ stateSonar, setStateSonar ] = useState(undefined)

  return (
    <div className="App">
      <Header />
      <Search stateTripInfo={stateTripInfo} setStateTripInfo={setStateTripInfo} setStateSonar={setStateSonar}/>
      <Workspace stateSonar={stateSonar}/>
      <Footer />
    </div>
  );
}

export default App;
