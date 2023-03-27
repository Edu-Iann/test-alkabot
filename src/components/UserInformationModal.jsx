import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import '../styles/informationModalStyles.css';

export function UserInformationModal({ post, open, onClose }) {
  const userEntries = Object.entries(post);

  function formatAddress(address) {
    return `${address.street}, ${address.suite}, ${address.city}, ZIP ${address.zipcode}`;
  }

  function formatCompany(company) {
    return `${company.name}, ${company.catchPhrase}, ${company.bs}`;
  }

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box className='commentsWrapper'>
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', top: 0, right: 0 }}
          >
            <CloseIcon />
          </IconButton>

          {userEntries.map(([key, value]) => {
            if (key === 'address') {
              return (
                <Typography mb={2} key={key} variant='body1'>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                  {formatAddress(value)}
                </Typography>
              );
            } else if (key === 'company') {
              return (
                <Typography mb={2} key={key} variant='body1'>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                  {formatCompany(value)}
                </Typography>
              );
            } else {
              return (
                <Typography mb={2} key={key} variant='body1'>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                  {JSON.stringify(value)}
                </Typography>
              );
            }
          })}
        </Box>
      </Fade>
    </Modal>
  );
}

UserInformationModal.propTypes = {
  post: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
