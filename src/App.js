import React, { useState } from 'react';
import SliderComponent from './components/SliderComponent';
import TimezoneList from './components/TimezoneList';
import './App.css';

function App() {

  return (
    <div className="app">
      
      <SliderComponent />
      <TimezoneList />
      
    </div>
  );
}

export default App;