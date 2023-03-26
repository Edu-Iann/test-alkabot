import React, { useRef } from 'react';
import Avatar from 'react-avatar-generator';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';

const RandomAvatar = ({ w, h }) => {
  const colorsRef = useRef([]);

  if (colorsRef.current.length === 0) {
    for (let i = 0; i < 10000; i++) {
      colorsRef.current.push(randomColor());
    }
  }

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Avatar colors={colorsRef.current} width={w} height={h} />
    </Box>
  );
};

RandomAvatar.propTypes = {
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
};

export default RandomAvatar;
