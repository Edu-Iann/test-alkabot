import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, ButtonGroup, Typography } from '@material-ui/core';

import { submitOptionToRender } from '../redux/actions/index.js';

import PostListPage from './PostListPage.jsx';
import UserListPage from './UserListPage.jsx';

const SwitchListing = () => {
  const [showUsers, setShowUsers] = useState(true);
  const dispatch = useDispatch();
  const renderOptions = useSelector((state) => state.shouldRender);
  const handleButtonClick = (e, bool) => {
    const optionToRender = e.target.innerText;
    dispatch(submitOptionToRender(optionToRender));
    setShowUsers(bool);
  };

  return (
    <Box mb={2}>
      <Typography variant='h5' component='h2' gutterBottom>
        Lista de {renderOptions === 'USUÁRIOS' ? 'Usuários' : 'Postagens'}
      </Typography>
      <ButtonGroup color='primary' aria-label='outlined primary button group'>
        <Button
          variant={showUsers ? 'contained' : 'outlined'}
          onClick={(e) => handleButtonClick(e, true)}
        >
          Usuários
        </Button>
        <Button
          variant={!showUsers ? 'contained' : 'outlined'}
          onClick={(e) => handleButtonClick(e, false)}
        >
          Postagens
        </Button>
      </ButtonGroup>
      <Box mt={4}>
        {renderOptions === 'USUÁRIOS' && <UserListPage />}
        {renderOptions === 'POSTAGENS' && <PostListPage />}
      </Box>
    </Box>
  );
};

export default SwitchListing;
