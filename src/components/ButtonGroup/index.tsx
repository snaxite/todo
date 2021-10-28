import { useSelector } from "react-redux"
import { setFilter } from "../../store/actions/task";
import { useDispatch } from 'react-redux';

type item = {
    title: string;
}

type input = {
    items?: Array<item>;
}

export default function Index({ items = [
    {
        title: 'Month',
    },
    {
        title: 'Week',
    },
    {
        title: 'Day',
    },
] }: input): JSX.Element {
    const dispatch = useDispatch()
    function clickHandler(title: string): void {
        dispatch(setFilter(title));
    }
    const filter = useSelector((state: any) => state.taskReducer.filter);
    return (
        <div className="rounded-lg py-1 border inline-block my-9 float-right" style={{ cursor: 'pointer', userSelect: 'none' }}>
            {items.map((item: item, key) => (
                <small onClick={() => clickHandler(item.title)} key={key} className={`px-4 text-gray-500 font-bold ${filter === item.title && "text-blue-400"}`}>
                    {item.title}
                </small>
            ))}
        </div>
    )
}