import { useState } from "react";
import "./TodoItem.css"

function TodoItem({ description, deleteItem }) {
    const [isFinished, setIsFinished] = useState(false);

    const toggleFinished = () => setIsFinished(!isFinished);

    const signalDelete = () => {
        deleteItem(description);
    }

    return (
        <li className="TodoItem">
            <input type="checkbox" id="isFinished" className="TodoItem-checkbox" onChange={toggleFinished}></input>
            <span className="TodoItem-description">{isFinished ? <del>{description}</del> : description}</span>
            <button onClick={signalDelete} className="TodoItem-delete-button">🗑️</button>
        </li>
    )
}

export default TodoItem;