import { useState } from 'react';
import './App.css';
import TodoItem from './Components/TodoItem';

function App() {
	function handleSubmit(e) {

		// By default, submitting a form sends its data to the url it served from
		// and then refreshes the page. preventDefault() lets you override this behavior
		e.preventDefault();

		const formData = new FormData(e.target);
		const obj = Object.fromEntries(formData.entries());

		// Don't do anything if input only has whitespace or nothing
		if (obj.description.trim().length < 1)
			return;

		// Don't add duplicate elements
		// Uses some() to iterate through array and see if there is any element
		// with the same description.
		if (list.some((e) => e.description === obj.description))
			return;
			
		// TODO: how will you add an element to the list while also updating the original variable?

		setNewItem("");
	}

	function deleteItem(descriptionToDelete)
    {
		// TODO: how do you delete an item from a list??
    }

	// We'll be using an array to store the data displayed in our to-do list.
	const [list, setList] = useState([]);
	const [newItem, setNewItem] = useState([]);

	return (
		<div className="App">
			<header className="App-header">
				<h1>
					To-Do List
				</h1>
			</header>
			<ul className="App-item-list">
				{/* TODO: Insert your list here. Hint: use array.map() to convert array elements into TodoItem components. */}
			</ul>
			<form method="post" onSubmit={handleSubmit}>
				<input type="submit" className="submit-item-button"/>
				<input 
					type="text" 
					name="description" 
					className="item-text-input"
					value={newItem}
					onChange={e => setNewItem(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default App;
