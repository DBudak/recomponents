import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReInput from './components/ReInput';
import ReSelect from './components/ReSelect';
import ReButton from './components/ReButton';

function App() {
  return (
    <div className="rec-test">
      <header className="App-header">
        <h3>Here are The Test Inputs:</h3>
      <ReInput/>
      <ReSelect options={[{text:"foo", value:"bar"}, {text: "Lorem", value: "Ipsum"}]}/>
      <ReButton/>
      </header>
    </div>
  );
}

export default App;
