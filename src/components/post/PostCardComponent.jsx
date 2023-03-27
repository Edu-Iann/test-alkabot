import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getPostComments } from '../../services/api';
import ButtonComponent from '../ButtonComponent.jsx';
import RandomAvatar from '../RandomAvatar.jsx';

import { InformationModal } from './InformationModal.jsx';

export const PostCardComponent = ({ post }) => {
  const { title, id } = post;
  const [commentsData, setCommentsData] = useState([]);
  const [modal, setModal] = useState(false);

  const handlePostClick = async (id) => {
    const comments = await getPostComments(id);
    setCommentsData(comments);
    setModal(true);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} key={post.id}>
        <Card>
          <RandomAvatar w={150} h={150} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {`Post ${id}`}
            </Typography>
            <Typography
              variant='body2'
              style={{ height: '50px', width: '200px', margin: 'auto' }}
            >
              {title}
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <ButtonComponent
              func={() => handlePostClick(id)}
              title='Ver Comentários'
            />
          </CardActions>
        </Card>
      </Grid>
      <InformationModal
        post={commentsData}
        open={modal}
        onClose={() => setModal(false)}
      />
    </>
  );
};

PostCardComponent.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
