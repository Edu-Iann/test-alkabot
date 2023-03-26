import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const CustomButton = withStyles({
  root: {
    borderRadius: 10,
    padding: '10px 20px',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#1976d2',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const ButtonComponent = ({ func, title }) => {
  return (
    <CustomButton
      variant='contained'
      color='primary'
      size='small'
      onClick={func}
    >
      {title}
    </CustomButton>
  );
};

export default ButtonComponent;

ButtonComponent.propTypes = {
  func: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
