import Badge from "../Badge";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/all";
import moment from "moment";
import { selectTask, task } from "../../store/actions/task";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import { Checkbox } from "@mui/material";
import { useDispatch } from 'react-redux';
import { useState } from "react";

type tableInputs = {
    data: Array<task>;
}

export default function Index({ data }: tableInputs): JSX.Element {
    const dispatch = useDispatch()
    function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>): void {
        dispatch(selectTask(parseInt(e.target.value)));
    }
    const [dir, setDir] = useState(false);
    function toggleSort() {
        setDir(!dir);
    }
    return (
        <>
            <table className="w-full">
                <thead className="text-gray-400 font-semibold border-t border-b select-none">
                    <tr>
                        <th className="py-3 w-1/12 text-left" onClick={toggleSort}>
                            {dir ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                        </th>
                        <th className="w-3/12 text-left">Tasks</th>
                        <th className="w-2/12 text-left">Status</th>
                        <th className="w-2/12 text-left">Date</th>
                        <th className="w-1/12 text-left">Time</th>
                        <th className="w-2/12 text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, key) => (
                        <tr key={key} className="font-bold text-gray-600 border-b h-24">
                            <td>
                                <Checkbox checked={item.status === 'Done'} value={item.id} onChange={handleCheckbox} />
                            </td>
                            <td><span>{item['title']}</span></td>
                            <td><Badge label={item['status']} variant={item.status === 'Paused' ? 'warning' : 'info'} /></td>
                            <td><span>{moment(item['date']).format('DD MMMM yyyy')}</span></td>
                            <td><span className="lowercase">{moment(item['date']).format('hh:mm A')}</span></td>
                            <td>
                                <span className="flex flex-row justify-center">
                                    <EditModal task={item} />
                                    <DeleteModal id={item.id} title={item.title} />
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {data.length === 0 &&
                <div>
                    <h5 className="text-center mt-16 text-gray-700 font-bold">No task found :D</h5>
                </div>
            }
        </>
    )
}