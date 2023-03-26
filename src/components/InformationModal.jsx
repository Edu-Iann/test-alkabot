import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import '../styles/informationModalStyles.css';

export function InformationModal({ post, open, onClose }) {
  console.log(post);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65%',
    height: '65%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    color: 'black',
    boxShadow: 24,
    // overflow: 'auto',
    p: 4,
  };

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
        <Box sx={style}>
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', top: 0, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant='h6' mb={2} id='transition-modal-title' mt={2}>
            Comentários associados ao post {post[0]?.postId}:
          </Typography>

          <Box sx={{ maxHeight: '60vh', overflow: 'auto' }}>
            {post.map((item) => (
              <Box key={item.id} mb={4} padding={'0 20px'}>
                <Grid container spacing={1} mb={4}>
                  <Grid item container alignItems='center' spacing={2}>
                    <Grid item>
                      <Typography variant='subtitle'>
                        {item.email} comentou:
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Box
                      style={{
                        border: '4px solid #444',
                        borderRadius: '0px 20px 20px 20px',
                        padding: '25px',
                      }}
                    >
                      <Typography>{item.body}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

InformationModal.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
