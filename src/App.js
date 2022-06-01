import { useState } from 'react';
import InputForm from './components/InputForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
    const DATA = [
		{firstName: "Bob", lastName: "Jones", address: "123 Memory Lane", phoneNumber: "123-123-1234"},
		{firstName: "Bill", lastName: "Richardson", address: "3201 Wood St", phoneNumber: "345-345-3456"},
	]
	
	const [list, setList] = useState(DATA);

	const addToList = newContact => {
		setList([...list, newContact]);
	}

    return (
    <div className='project'>
		<InputForm addToList={addToList} />
		<ContactList list={list} />
	</div>
    );
}

export default App;