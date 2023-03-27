import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import AssociatedCommentsList from './AssociatedCommentsList.jsx';

import '../../styles/informationModalStyles.css';

export function InformationModal({ post, open, onClose }) {
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
            sx={{ position: 'absolute', top: 0, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant='h6' mb={4} id='transition-modal-title' mt={2}>
            {`Comentários do post ${post[0]?.postId}:`}
          </Typography>
          <Box className='commentsContainer'>
            {post.map((item) => (
              <AssociatedCommentsList key={item.id} item={item} />
            ))}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

InformationModal.propTypes = {
  post: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
