import './Board.css';
import './Element.css';
import { Col, Container, Row } from 'react-bootstrap';

import Element from './Element';

const Board = ({ setSelectedItem, selectedFamily }) => {
	const elementsPeriod1 = elements[0].map(e => {
		if (e === '-') {
			return <Col key={e.symbol} className='Cell'></Col>;
		} else {
			return <Col key={e.symbol}><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const elementsPeriod2 = elements[1].map(e => {
		if (e === '-') {
			return <Col key={e.symbol} className='Cell'></Col>;
		} else {
			return <Col key={e.symbol}><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const elementsPeriod3 = elements[2].map(e => {
		if (e === '-') {
			return <Col key={e.symbol} className='Cell'></Col>;
		} else {
			return <Col key={e.symbol}><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const elementsPeriod4 = elements[3].map(e => {
		if (e === '-') {
			return <Col key={e.symbol} className='Cell'></Col>;
		} else {
			return <Col key={e.symbol}><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const elementsPeriod5 = elements[4].map(e => {
		if (e === '-') {
			return <Col key={e.symbol} className='Cell'></Col>;
		} else {
			return <Col key={e.symbol}><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const elementsPeriod6 = elements[5].map(e => {
		if (e === '-') {
			return <Col key={e.symbol} className='Cell'></Col>;
		} else {
			return <Col key={e.symbol}><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const elementsPeriod7 = elements[6].map(e => {
		if (e === '-') {
			return <Col key={e.symbol} className='Cell'></Col>;
		} else {
			return <Col key={e.symbol}><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const lan = elements[7].map(e => {
		if (e === '-') {
			return <Col key={e.symbol} className='Cell'></Col>;
		} else {
			return <Col key={e.symbol}><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const act = elements[8].map(e => {
		if (e === '-') {
			return <Col key={e.symbol} className='Cell'></Col>;
		} else {
			return <Col key={e.symbol}><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	return (
		<Container fluid className="Board-content">
			<Row>
				<Col>
					<Row>
						{elementsPeriod1.slice(0, 9)}
					</Row>
				</Col>
				<Col>
					<Row>
						{elementsPeriod1.slice(9, 18)}
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						{elementsPeriod2.slice(0, 9)}
					</Row>
				</Col>
				<Col>
					<Row>
						{elementsPeriod2.slice(9, 18)}
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						{elementsPeriod3.slice(0, 9)}
					</Row>
				</Col>
				<Col>
					<Row>
						{elementsPeriod3.slice(9, 18)}
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						{elementsPeriod4.slice(0, 9)}
					</Row>
				</Col>
				<Col>
					<Row>
						{elementsPeriod4.slice(9, 18)}
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						{elementsPeriod5.slice(0, 9)}
					</Row>
				</Col>
				<Col>
					<Row>
						{elementsPeriod5.slice(9, 18)}
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						{elementsPeriod6.slice(0, 9)}
					</Row>
				</Col>
				<Col>
					<Row>
						{elementsPeriod6.slice(9, 18)}
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						{elementsPeriod7.slice(0, 9)}
					</Row>
				</Col>
				<Col>
					<Row>
						{elementsPeriod7.slice(9, 18)}
					</Row>
				</Col>
			</Row>
			<br />
			<Row>
				<Col>
					<Row>
						{lan.slice(0, 9)}
					</Row>
				</Col>
				<Col>
					<Row>
						{lan.slice(9, 18)}
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						{act.slice(0, 9)}
					</Row>
				</Col>
				<Col>
					<Row>
						{act.slice(9, 18)}
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Board;
