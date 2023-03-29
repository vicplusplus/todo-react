import { useId } from "react";
import "./TodoItem.css"

function TodoItem({ description }) {
    const id = useId();

    return (
        <li className="TodoItem" key={id}>
            <input type="checkbox" id="isFinished" className="TodoItem-checkbox"></input>
            <span className="TodoItem-description">{description}</span>
            <div className="TodoItem-buttons">
                <input type="button" id="isEditing"></input>
                <input type="button" id="isDeleting"></input>
            </div>
        </li>
    )
}

export default TodoItem;