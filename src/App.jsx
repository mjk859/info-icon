import React from 'react';
import InfoLabel from './component/InfoLabel';
import infoImage from './assets/info.jpg';

function App() {
  return (
    <div className="App">
      <InfoLabel label="discord username:" imageSrc={infoImage} />
    </div>
  );
}

export default App;
