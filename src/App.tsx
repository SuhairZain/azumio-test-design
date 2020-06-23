import React from 'react';
import './App.css';

import colors from './global/colors';
import Onboarding from './Onboarding';

function App() {
  return (
    <div className="App" style={{ color: colors.textOnLightBackground }}>
      <Onboarding />
    </div>
  );
}

export default App;
