import React from 'react';
import ReactDOM from 'react-dom';
import Sonar from './Sonar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sonar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
