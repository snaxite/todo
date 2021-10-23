import { Button } from "@mui/material";
import TableList from "../components/TableList";
import ButtonGroup from "../components/ButtonGroup";
import { GrAdd } from "react-icons/all";

export default function TodoList(): JSX.Element {

    const data = [
        {
            id: 1,
            task: 'do it with mamad',
            status: 'paused',
            date: '12 October, 2020',
            time: '12:00 am',
        }
    ]

    const buttonGroupItems = [
        {
            title: 'Month',
            action: () => {}
        },
        {
            title: 'Week',
            action: () => {}
        },
        {
            title: 'Day',
            action: () => {}
        },
    ]

    return (
        <>
            <Button variant="contained" color="primary" className="text-gray-50 py-2 capitalize"><GrAdd />&nbsp;Add Task</Button>
            <ButtonGroup items={buttonGroupItems} />
            <TableList data={data} />
        </>
    )
}