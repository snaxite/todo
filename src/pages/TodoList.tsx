import TableList from "../components/TableList";
import ButtonGroup from "../components/ButtonGroup";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector } from 'react-redux';
import AddModal from "../components/TableList/AddModal";
import { task } from "../store/actions/task";
import moment from "moment";
import { useMemo } from "react";

export default function TodoList(): JSX.Element {
    const filter: string = useSelector((state: any) => state.taskReducer.filter);
    const tasks: Array<task> = useSelector((state: any) => state.taskReducer.tasks) || [];

    function isRelevant(): Array<task> {
        const res: Array<task> = []
        if (filter === 'Day') {
            for (let t of tasks) {
                if (moment().diff(t.date, 'days') === 0) res.push(t);
            }
        } else if (filter === 'Week') {
            for (let t of tasks) {
                if (moment().diff(t.date, 'weeks') === 0) res.push(t);
            }
        } else {
            for (let t of tasks) {
                if (moment().diff(t.date, 'months') === 0) res.push(t);
            }
        }
        return res;
    }

    const addButtonMemo = useMemo(() => {
        return <AddModal />
    }, []);

    const filtersMemo = useMemo(() => {
        return <ButtonGroup />;
    }, [])

    return (
        <>
            {addButtonMemo}
            <Tabs className="pt-4">
                <TabList>
                    <Tab>To Do</Tab>
                    <Tab>Done Tasks</Tab>
                </TabList>
                <TabPanel>
                    {filtersMemo}
                    <TableList data={isRelevant().filter((ta: task) => ta.status !== 'Done')} />
                </TabPanel>
                <TabPanel>
                    {filtersMemo}
                    <TableList data={isRelevant().filter((ta: task) => ta.status === 'Done')} />
                </TabPanel>
            </Tabs>
        </>
    )
}

