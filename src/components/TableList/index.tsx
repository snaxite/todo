import Badge from "../Badge";
import { IoClose, GoPencil, TiTick } from "react-icons/all";
import moment from "moment";
import { task } from "../../store/actions/task";
import DeleteModal from "./DeleteModal";

type tableInputs = {
    data: Array<task>;
}

export default function Index({ data }: tableInputs): JSX.Element {
    return (
        <table className="w-full">
            <thead className="text-gray-400 font-semibold border-t border-b">
                <th className="py-5 w-1/12 text-left"></th>
                <th className="w-3/12 text-left">Tasks</th>
                <th className="w-2/12 text-left">Status</th>
                <th className="w-2/12 text-left">Date</th>
                <th className="w-1/12 text-left">Time</th>
                <th className="w-2/12 text-left"></th>
            </thead>
            <tbody>
                {data.length !== 0 ? data.map((item, key) => (
                    <tr key={key} className="font-bold text-gray-600 border-b h-24">
                        <td className="flex flex-row justify-center"><input className="mt-9" type="checkbox" /></td>
                        <td><span>{item['title']}</span></td>
                        <td><Badge label={item['status']} variant={item['status'] === 'Paused' ? 'warning' : item['status'] === 'In Progress' ? 'info' : 'success'} /></td>
                        <td><span>{moment(item['date']).format('DD MMMM yyyy')}</span></td>
                        <td><span className="lowercase">{moment(item['date']).format('hh:mm A')}</span></td>
                        <td>
                            <span className="flex flex-row justify-center">
                                <span className="p-2 text-blue-500 text-2xl hover:bg-blue-100 rounded-full">
                                    <GoPencil />
                                </span>
                                <DeleteModal id={item.id} />
                                {item.status !== 'Done' &&
                                    <span className="p-2 text-green-500 ml-4 text-3xl hover:bg-green-100 rounded-full" >
                                        <TiTick />
                                    </span>
                                }
                            </span>
                        </td>
                    </tr>
                ))
                    :
                    <h5 className="text-center my-4 text-gray-700">No task found</h5>
                }
            </tbody>
        </table>
    )
}