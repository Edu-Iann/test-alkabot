import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

const LoadingComponent = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
};

LoadingComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingComponent;
