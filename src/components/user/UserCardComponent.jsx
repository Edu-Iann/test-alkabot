import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getUserDetails } from '../../services/api';
import ButtonComponent from '../ButtonComponent.jsx';
import RandomAvatar from '../RandomAvatar.jsx';

import { UserInformationModal } from './UserInformationModal.jsx';

export const UserCardComponent = (info) => {
  const { data } = info;
  const [userDetailsData, setUserDetailsData] = useState([]);
  const [modal, setModal] = useState(false);

  const handleUserClick = async (id) => {
    const details = await getUserDetails(id);
    setUserDetailsData(details);
    setModal(true);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} key={data?.id}>
        <Card>
          <RandomAvatar w={150} h={150} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {`${data?.name}`}
            </Typography>
            <Typography
              variant='body2'
              style={{ height: '50px', width: '200px', margin: 'auto' }}
            >
              {data?.email}
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <ButtonComponent
              func={() => handleUserClick(data?.id)}
              title='Ver Detalhes'
            />
          </CardActions>
        </Card>
      </Grid>
      <UserInformationModal
        post={userDetailsData}
        open={modal}
        onClose={() => setModal(false)}
      />
    </>
  );
};

UserCardComponent.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
