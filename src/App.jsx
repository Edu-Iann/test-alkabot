import React, { useEffect, useState } from 'react';

import { CardComponent } from './components/CardComponent.jsx';
import { getPosts } from './services/api';

import './App.css';

function App() {
  const [data, setData] = useState([]);

  const fetchPosts = async () => {
    const result = await getPosts();
    console.log(result);
    return setData(result);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='App'>
      <CardComponent posts={data} />
    </div>
  );
}

export default App;
