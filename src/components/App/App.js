import React, { useState } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Workspace from '../Workspace/Workspace';
import Footer from '../Footer/Footer';

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
