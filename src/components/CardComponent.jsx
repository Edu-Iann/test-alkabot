import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getPostComments } from '../services/api';

import ButtonComponent from './ButtonComponent.jsx';
import { InformationModal } from './InformationModal.jsx';
import RandomAvatar from './RandomAvatar.jsx';

export const CardComponent = ({ posts }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [modal, setModal] = useState(false);

  const handlePostClick = async (id) => {
    console.log(id);
    const comments = await getPostComments(id);
    setCommentsData(comments);
    setModal(true);
  };

  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card>
            <RandomAvatar w={150} h={150} />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Post id: {post.id}
              </Typography>
              <Typography
                variant='body2'
                style={{ height: '50px', width: '200px', margin: 'auto' }}
              >
                {post.title}
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <ButtonComponent
                func={() => handlePostClick(post.id)}
                title='View Comments'
              />
            </CardActions>
          </Card>
        </Grid>
      ))}
      <InformationModal
        post={commentsData}
        open={modal}
        onClose={() => setModal(false)}
      />
    </Grid>
  );
};

CardComponent.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
