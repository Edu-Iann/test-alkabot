import React from 'react';
import { Provider } from 'react-redux';

import UserPostSwitch from './pages/Test.jsx';
import store from './redux/store.js';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <UserPostSwitch />
      </Provider>
    </div>
  );
}

export default App;
