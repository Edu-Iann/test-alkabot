import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const AssociatedCommentsList = ({ item }) => {
  const { id, email, body } = item;
  return (
    <>
      <Box key={id} mb={4} padding={'0 20px'}>
        <Grid container spacing={1} mb={4}>
          <Grid item container alignItems='center' spacing={2}>
            <Grid item>
              <Typography variant='subtitle2'>{`${email} comentou:`}</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Box
              style={{
                border: '2px solid #444',
                borderRadius: '0px 20px 20px 20px',
                padding: '25px',
              }}
            >
              <Typography>{body}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

AssociatedCommentsList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default AssociatedCommentsList;
