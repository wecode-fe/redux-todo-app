import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux/taskSlice";

const AddTask = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    return (
        <div className="add-task">
            <label htmlFor="task">
                Task
                <input type="text" id="task"
                    value={task}
                    onChange={(e) => {
                        setTask(e.target.value)
                    }}
                />
            </label>
            <button onClick={() => {
                const id = Math.floor(Math.random() * 1000)
                setTask('')
                dispatch(addTask({ id, task, isDone: false }))
            }}>Add Task</button>
        </div>
    )
}

export default AddTask;