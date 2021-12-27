import React from 'react';
import ReactDOM from 'react-dom';

import SignupForm from './components/SignupForm';

import './assets/styles/styles.css';

function App() {
  return <SignupForm />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
