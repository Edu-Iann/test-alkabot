import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import LoadingComponent from '../components/LoadingComponent.jsx';
import { PostCardComponent } from '../components/PostCardComponent.jsx';
import { getPosts } from '../services/api';

const PostListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const result = await getPosts();
    setData(result);
    // Apenas para simular uma demora na request para que o loading possa aparecer
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return loading ? (
    <LoadingComponent isLoading={loading} />
  ) : (
    <>
      <Grid container spacing={3}>
        {data.map((info, index) => (
          <PostCardComponent key={index} post={info} />
        ))}
      </Grid>
    </>
  );
};

export default PostListPage;
