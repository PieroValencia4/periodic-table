import './App.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Board from './Board';
import Header from './Header';
import OptionsBar from './OptionsBar';

const App = () => {
	const [selectedItem, setSelectedItem] = useState('H');

	return (
		<div className="App">
			<Header />
			<OptionsBar selectedItem={selectedItem} />
			<Board setSelectedItem={setSelectedItem} />
		</div>
	);
};

export default App;
