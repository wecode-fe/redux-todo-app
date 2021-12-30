import { useDispatch } from "react-redux";
import { removeTask, toggleIsDone } from "./redux/taskSlice";
const Task = props => {
    const dispatch = useDispatch();
    return (
        <div className="task">
            <h4 className={props.done ? 'done' : ''}>{props.task}</h4>
            <h4 className="success" onClick={() => {
                dispatch(toggleIsDone(props.id))
            }}>{props.done ? 'Undone' : 'Done'}</h4>
            <p onClick={() => {
                dispatch(removeTask(props.id))
            }}>X</p>
        </div>
    )
}

export default Task;