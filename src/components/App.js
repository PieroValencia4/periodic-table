import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

import Board from './Board';
import Header from './Header';
import OptionsBar from './OptionsBar';

const App = () => {
	return (
		<div className="App">
			<Header />
			<OptionsBar />
			<Board />
		</div>
	);
};

export default App;
