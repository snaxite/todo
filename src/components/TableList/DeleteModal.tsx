/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-undef */
import {
  Backdrop,
  Button,
  Fade,
  IconButton,
  Modal,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { IoClose, GrClose } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../store/actions/task';
import React from 'react';

export default function DeleteModal({
  id,
  title,
  stateUpdater,
}: {
  id: number;
  title?: string;
  stateUpdater: Function;
}): JSX.Element {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  function toggleOpen(): void {
    setOpen(!open);
  }

  function handleDelete(): void {
    dispatch(removeTask(id));
    stateUpdater();
    toggleOpen();
  }

  const style: Object = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    borderRadius: '1rem',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <span
        onClick={toggleOpen}
        className="p-2 text-red-500 ml-4 text-3xl hover:bg-red-100 rounded-full cursor-pointer"
      >
        <IoClose />
      </span>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={toggleOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="flex flex-row justify-between items-center">
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Delete this task?
              </Typography>
              <IconButton onClick={toggleOpen}>
                <GrClose />
              </IconButton>
            </div>
            <Typography variant="body2" className="text-gray-600 my-8">
              {title}
            </Typography>
            <div className="mt-8">
              <Button
                variant="contained"
                color="primary"
                onClick={handleDelete}
              >
                <span className="capitalize">Delete</span>
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
