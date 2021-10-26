import { Modal, Box, Typography, Button, InputLabel, TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/all";
import { useDispatch } from 'react-redux';
import { addTask } from "../../store/actions/task";

export default function AddModal() {

    const [task, setTask] = useState({
        title: '',
        status: '',
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
        dispatch(addTask(task))
        setTask({
            title: '',
            status: '',
            date: new Date(),
        })
        handleClose();
    }

    function handleForm(event: any): void {
        setTask({ ...task, [event.target.name]: event.target.value });
    }

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

    return (
        <>
            <Button variant="contained" color="primary" className="text-gray-50 py-2 capitalize float-right" onClick={handleOpen}>
                <AiOutlinePlus />&nbsp;Add Task
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h5" component="h2">
                        Add Task
                    </Typography>
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
                    <Button variant="contained" color="primary" onClick={handleAdd}>Add</Button>
                </Box>
            </Modal>
        </>
    )
}