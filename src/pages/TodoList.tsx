import TableList from "../components/TableList";
import ButtonGroup from "../components/ButtonGroup";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddModal from "../components/TableList/AddModal";
import { useMemo } from "react";

export default function TodoList(): JSX.Element {
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
                    <TableList />
                </TabPanel>
                <TabPanel>
                    {filtersMemo}
                    <TableList type="Done" />
                </TabPanel>
            </Tabs>
        </>
    )
}
