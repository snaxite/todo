/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
import Badge from '../Badge';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/all';
import moment from 'moment';
import { selectTask, TaskType } from '../../store/actions/task';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import { Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

type TableInputs = {
  type?: string;
};

export default function Index({ type }: TableInputs): JSX.Element {
  const dispatch = useDispatch();
  const [state, setState] = useState(true);
  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(selectTask(parseInt(e.target.value)));
    updateStates();
  }
  const [dir, setDir] = useState(false);
  function toggleSort(): void {
    setDir(!dir);
  }
  const filter: string = useSelector((state: any) => state.taskReducer.filter);
  let tasks: Array<TaskType> =
    useSelector((state: any) => state.taskReducer.tasks) || [];

  tasks = tasks.filter((t) => {
    if (type === 'Done' && (t.status === 'Done' || t.status === 'Deployed')) {
      return t;
    } else if (!type && t.status !== 'Done' && t.status !== 'Deployed') {
      return t;
    }
  });

  function updateStates(): void {
    setState(!state);
  }

  function isRelevant(): Array<TaskType> {
    let res: Array<TaskType> = [];
    if (filter === 'Day') {
      for (const t of tasks) {
        if (moment().diff(t.date, 'days') === 0) res.push(t);
      }
    } else if (filter === 'Week') {
      for (const t of tasks) {
        if (moment().diff(t.date, 'weeks') === 0) res.push(t);
      }
    } else if (filter === 'Month') {
      for (const t of tasks) {
        if (moment().diff(t.date, 'months') === 0) res.push(t);
      }
    } else {
      res = tasks;
    }
    return res;
  }
  return (
    <>
      <table className="w-full">
        <thead className="text-gray-400 font-semibold border-t border-b select-none">
          <tr>
            <th className="py-3 w-1/12 text-left" onClick={toggleSort}>
              {!dir ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </th>
            <th className="w-3/12 text-left">Tasks</th>
            <th className="w-2/12 text-left">Status</th>
            <th className="w-2/12 text-left">Date</th>
            <th className="w-1/12 text-left">Time</th>
            <th className="w-2/12 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {isRelevant()
            .sort((a, b) => {
              if (dir) {
                return a.title > b.title ? 1 : -1;
              }
              return a.title <= b.title ? 1 : -1;
            })
            .map((item, key) => (
              <tr key={key} className="font-bold text-gray-600 border-b h-24">
                <td>
                  <Checkbox
                    checked={item.status === 'Done'}
                    value={item.id}
                    onChange={handleCheckbox}
                  />
                </td>
                <td>
                  <span>{item['title']}</span>
                </td>
                <td>
                  <Badge
                    label={item['status']}
                    variant={item.status === 'Paused' ? 'warning' : 'info'}
                  />
                </td>
                <td>
                  <span>{moment(item['date']).format('DD MMMM yyyy')}</span>
                </td>
                <td>
                  <span className="lowercase">
                    {moment(item['date']).format('hh:mm A')}
                  </span>
                </td>
                <td>
                  <span className="flex flex-row justify-center">
                    <EditModal task={item} stateUpdater={updateStates} />
                    <DeleteModal
                      id={item.id}
                      title={item.title}
                      stateUpdater={updateStates}
                    />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isRelevant().length === 0 && (
        <div>
          <h5 className="text-center mt-16 text-gray-700 font-bold">
            No task found :D
          </h5>
        </div>
      )}
    </>
  );
}
