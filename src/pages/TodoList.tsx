import TableList from "../components/TableList";
import ButtonGroup from "../components/ButtonGroup";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector } from 'react-redux';
import AddModal from "../components/TableList/AddModal";
import { task } from "../store/actions/task";

export default function TodoList(): JSX.Element {

    const tasks = useSelector((state: any) => state.taskReducer.tasks) || [];
    const buttonGroupItems = [
        {
            title: 'Month',
        },
        {
            title: 'Week',
        },
        {
            title: 'Day',
        },
    ]

    return (
        <>
            <AddModal />
            <Tabs>
                <TabList>
                    <Tab>To Do</Tab>
                    <Tab>Done Tasks</Tab>
                </TabList>
                <TabPanel>
                    <ButtonGroup items={buttonGroupItems} />
                    <TableList data={tasks.filter((ta: task) => ta.status !== 'Done')} />
                </TabPanel>
                <TabPanel>
                    <ButtonGroup items={buttonGroupItems} />
                    <TableList data={tasks.filter((ta: task) => ta.status === 'Done')} />
                </TabPanel>
            </Tabs>
        </>
    )
}

