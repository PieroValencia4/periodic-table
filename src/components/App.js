import './App.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Board from './Board';
import Header from './Header';
import OptionsBar from './OptionsBar';

const App = () => {
	const [selectedItem, setSelectedItem] = useState('H');
	const [selectedFamily, setSelectedFamily] = useState('');

	return (
		<div className="App">
			<Header />
			<OptionsBar selectedItem={selectedItem} setSelectedFamily={setSelectedFamily} />
			<Board setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} />
		</div>
	);
};

export default App;
