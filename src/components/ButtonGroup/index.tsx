/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from 'react-redux';
import { setFilter } from '../../store/actions/task';
import { useDispatch } from 'react-redux';

type ItemType = {
  title: string;
};

type InputType = {
  items?: Array<ItemType>;
};

export default function Index({
  items = [
    {
      title: 'Month',
    },
    {
      title: 'Week',
    },
    {
      title: 'Day',
    },
  ],
}: InputType): JSX.Element {
  const dispatch = useDispatch();
  function clickHandler(title: string): void {
    dispatch(setFilter(title));
  }
  const filter = useSelector((state: any) => state.taskReducer.filter);
  return (
    <div
      className="rounded-lg py-1 border inline-block my-9 float-right"
      style={{ cursor: 'pointer', userSelect: 'none' }}
    >
      {items.map((item: ItemType, key) => (
        <small
          onClick={(): void => clickHandler(item.title)}
          key={key}
          className={`px-4 text-gray-500 font-bold ${
            filter === item.title && 'text-blue-400'
          }`}
        >
          {item.title}
        </small>
      ))}
    </div>
  );
}
