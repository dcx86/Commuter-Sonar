import React, { useState } from 'react';
import Header from './Header';
import Search from './Search';
import Workspace from './Workspace';
import Footer from './Footer';

import './App.css';

function App() {
  const [ stateSonar, setStateSonar ] = useState(undefined)

  return (
    <div className="App">
      <Header />
      <Search setStateSonar={setStateSonar}/>
      <Workspace stateSonar={stateSonar}/>
      <Footer />
    </div>
  );
}

export default App;
