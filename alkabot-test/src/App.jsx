import React, { useEffect } from 'react';

import { getPosts } from './services/api';

import './App.css';

function App() {
  const fetchPosts = async () => {
    const result = await getPosts();
    return console.log(result);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return <div className='App'>Hi</div>;
}

export default App;
