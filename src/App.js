import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

const App = () => {
  return (
    <div id="main-container">
      <ToastContainer autoClose={5000} />
      <Routes />
    </div>
  );
}

export default App;
