import React from 'react';
import { Provider } from 'react-redux';

import SwitchListing from './pages/SwitchListing.jsx';
import store from './redux/store.js';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <SwitchListing />
      </Provider>
    </div>
  );
}

export default App;
