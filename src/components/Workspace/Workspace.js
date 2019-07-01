import React from 'react';
import './Workspace.css';
import Sonar from '../Sonar/Sonar';

function Workspace({ stateSonar }) {
  return (
    <section className="Workspace">
      <Sonar stateSonar={stateSonar}/>
    </section>
  );
}

export default Workspace