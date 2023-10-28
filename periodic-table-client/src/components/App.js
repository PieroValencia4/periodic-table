import './App.css';
import Board from './Board';
import Header from './Header';
import OptionsBar from './OptionsBar';
import { Component } from 'react';
import { useEffect, useState } from 'react';

const App = () => {
	const [elements, setElements] = useState({});
	const [families, setFamilies] = useState([]);
	const [selectedFamily, setSelectedFamily] = useState('');
	const [selectedElement, setSelectedElement] = useState({});

	useEffect(() => {
        fetch('http://localhost:8080/families')
            .then(resp => resp.json())
            .then(data => setFamilies(data));

        fetch('http://localhost:8080/elements')
            .then(resp => resp.json())
            .then(data => {
            	setElements(data);
            	setSelectedElement(data['Period 1'][0]);
            });
	}, []);

	let optionsBar = <h3>Loading...</h3>;
	let board = <h3>Loading...</h3>;

	if (families.length !== 0) {
		optionsBar = <OptionsBar families={families} selectedElement={selectedElement} setSelectedFamily={setSelectedFamily} />;
	}

	if (Object.keys(elements).length !== 0) {
		board = <Board elements={elements} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />;
	}

	return (
	    <div className='App'>
	    	<Header />
	    	{optionsBar}
	 		{board}   	
	    </div>
	);
}

export default App;
