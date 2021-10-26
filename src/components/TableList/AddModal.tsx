import { Modal, Box, Typography, Button, InputLabel, TextField, Select, MenuItem, IconButton } from "@mui/material";
import { useState } from "react";
import { AiOutlinePlus, GrClose } from "react-icons/all";
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { addTask } from "../../store/actions/task";

const style: Object = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    bgcolor: 'background.paper',
    borderRadius: '1rem',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function AddModal() {

    const [task, setTask] = useState({
        id: 0,
        title: '',
        status: 'In Progress',
        date: new Date(),
    })

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);

    function handleOpen(): void {
        setOpen(true);
    }

    function handleClose(): void {
        setOpen(false);
    }

    function handleAdd(): void {
        if (task.title && task.status && task.date) {
            dispatch(addTask(task))
            setTask({
                id: 0,
                title: '',
                status: 'In Progress',
                date: new Date(),
            })
            handleClose();
        } else {
            toast.error('Fill all fields.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }
    }

    function handleForm(event: any): void {
        setTask({ ...task, [event.target.name]: event.target.value });
    }

    return (
        <>
            <Button variant="contained" color="primary" className="text-gray-50 py-2 capitalize float-right" onClick={handleOpen}>
                <span className="capitalize flex flex-row items-center"><AiOutlinePlus />&nbsp;Add Task</span>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex flex-row justify-between items-center">
                        <Typography variant="h5" component="h2">
                            Add Task
                        </Typography>
                        <IconButton onClick={handleClose}><GrClose /></IconButton>
                    </div>
                    <div className="mt-4">
                        <div className="my-3">
                            <InputLabel className="mb-2">Task title</InputLabel>
                            <TextField required value={task.title} onChange={handleForm} type="text" name="title" fullWidth variant="outlined" label="Title" />
                        </div>
                        <div className="my-3">
                            <InputLabel className="mb-2">Task status</InputLabel>
                            <Select required value={task.status} onChange={handleForm} fullWidth name="status" variant="outlined">
                                <MenuItem value="In Progress">In Progress</MenuItem>
                                <MenuItem value="Paused">Paused</MenuItem>
                                <MenuItem value="Done">Done</MenuItem>
                            </Select>
                        </div>
                        <div className="my-3">
                            <InputLabel className="mb-2">Date/Time</InputLabel>
                            <TextField required value={task.date} onChange={handleForm} name="date" variant="outlined" type="datetime-local" fullWidth />
                        </div>
                    </div>
                    <Button variant="contained" color="primary" onClick={handleAdd}>
                        <span className="capitalize">Add</span>
                    </Button>
                </Box>
            </Modal>
        </>
    )
}