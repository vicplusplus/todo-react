import { useState } from 'react';
import './App.css';
import TodoItem from './Components/TodoItem';

function App() {
	function handleSubmit(e) {

		// By default, submitting a form sends its data to the url it served from
		// and then refreshes the page. preventDefault() lets you override this behavior
		e.preventDefault();

		const formData = new FormData(e.target)

		const obj = Object.fromEntries(formData.entries());

		// Don't do anything if input only has whitespace or nothing
		if (obj.description.trim().length < 1)
			return;

		// Don't add duplicate elements
		// Uses some() to iterate through array and see if there is any element
		// with the same description.
		if (list.some((el) => el.description === obj.description))
			return;

		// useState hooks only update when the value of the state variable changes.
		// Therefore, to update a list, you have to make a new list to let useState
		// know that it has been modified.
		const newList = list.concat(obj);
		setList(newList);
		setNewItem("");
	}

	// We'll be using an array to store the data displayed in our to-do list.
	const [list, setList] = useState([]);
	const [newItem, setNewItem] = useState([]);

	// Note: We use an embedded map() function call to convert the
	// array elements into copies of the TodoItem component.
	return (
		<div className="App">
			<header className="App-header">
				<h1>
					To-Do List
				</h1>
			</header>
			<ul className="App-item-list">
				{list.map((val) => <TodoItem description={val.description} key={val.description}/>)}
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
