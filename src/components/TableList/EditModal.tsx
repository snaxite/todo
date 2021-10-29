import { Modal, Box, Typography, Button, InputLabel, TextField, Select, MenuItem, IconButton } from "@mui/material";
import moment from "moment";
import { useMemo, useState } from "react";
import { GoPencil, GrClose } from "react-icons/all";
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { editTask } from "../../store/actions/task";
import { task } from "../../store/actions/task";

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

export default function EditModal({ task }: { task: task }): JSX.Element {

    const [data, setData] = useState({
        id: task.id,
        title: task.title,
        status: task.status,
        date: task.date,
    })

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);

    function handleOpen(): void {
        setOpen(true);
    }

    function handleClose(): void {
        setOpen(false);
    }

    function handleEdit(): void {
        if (data.title && data.status && data.date) {
            dispatch(editTask(data))
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
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const titleMemo = useMemo(function () {
        return (
            <div className="flex flex-row justify-between items-center">
                <Typography variant="h5" component="h2">
                    Edit Task
                </Typography>
                <IconButton onClick={handleClose}><GrClose /></IconButton>
            </div>
        )
    }, []);

    return (
        <>
            <span className="p-2 text-blue-500 text-2xl hover:bg-blue-100 rounded-full cursor-pointer" onClick={handleOpen}>
                <GoPencil />
            </span>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {titleMemo}
                    <div className="mt-4">
                        <div className="my-3">
                            <InputLabel className="mb-2">Task title</InputLabel>
                            <TextField multiline required value={data.title} onChange={handleForm} type="text" name="title" fullWidth variant="outlined" label="Title" />
                        </div>
                        <div className="my-3">
                            <InputLabel className="mb-2">Task status</InputLabel>
                            <Select required value={data.status} onChange={handleForm} fullWidth name="status" variant="outlined">
                                <MenuItem value="In Progress">In Progress</MenuItem>
                                <MenuItem value="Paused">Paused</MenuItem>
                                <MenuItem value="Done">Done</MenuItem>
                            </Select>
                        </div>
                        <div className="my-3">
                            <InputLabel className="mb-2">Date/Time</InputLabel>
                            <TextField required value={moment(data.date).format('yyyy-MM-DDThh:mm')} onChange={handleForm} name="date" variant="outlined" type="datetime-local" fullWidth />
                        </div>
                    </div>
                    <Button variant="contained" color="primary" onClick={handleEdit}>
                        <span className="capitalize">Submit</span>
                    </Button>
                </Box>
            </Modal>
        </>
    )
}