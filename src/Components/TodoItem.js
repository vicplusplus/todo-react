import { useState } from "react";
import "./TodoItem.css"

// This component represents a single element in our To-Do list.
// It has a check box, a description, and a delete button.
function TodoItem({ description, deleteItem }) {
    const [isFinished, setIsFinished] = useState(false);

    function toggleFinished() {
        setIsFinished(!isFinished);
    }

    // We're not using the deleteItem function passed down from the parent list.
    // How can we use it to delete a given item?
    function signalDelete() {
        
    }

    return (
        <li className="TodoItem">
            <input type="checkbox" id="isFinished" className="TodoItem-checkbox" onChange={toggleFinished}></input>
            <span className="TodoItem-description">{isFinished ? <del>{description}</del> : description}</span>
            {/* This button lacks functionality. Can you make it send a message to the parent to delete this item? */}
            <button className="TodoItem-delete-button">🗑️</button>
        </li>
    )
}

export default TodoItem;