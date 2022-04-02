import './Board.css';
import './Element.css';
import { Col, Container, Row } from 'react-bootstrap';

import Element from './Element';

const periods = 7;
const groups = 18;

const elements = [
	[{symbol: 'H', family: 'NoMetals'}, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', {symbol: 'He', family: 'NobleGases'}],
	[{symbol: 'Li', family: 'AlkaliMetals'}, {symbol: 'Be', family: 'AlkalineEarthMetals'}, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', {symbol: 'B', family: 'Metalloids'}, {symbol: 'C', family: 'NoMetals'}, {symbol: 'N', family: 'NoMetals'}, {symbol: 'O', family: 'NoMetals'}, {symbol: 'F', family: 'Halogens'}, {symbol: 'Ne', family: 'NobleGases'}],
	[{symbol: 'Na', family: 'AlkaliMetals'}, {symbol: 'Mg', family: 'AlkalineEarthMetals'}, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', {symbol: 'Al', family: 'PostTransitionalMetals'}, {symbol: 'Si', family: 'Metalloids'}, {symbol: 'P', family: 'NoMetals'}, {symbol: 'S', family: 'NoMetals'}, {symbol: 'Cl', family: 'Halogens'}, {symbol: 'Ar', family: 'NobleGases'}],
	[{symbol: 'K', family: 'AlkaliMetals'}, {symbol: 'Ca', family: 'AlkalineEarthMetals'}, {symbol: 'Sc', family: 'TransitionMetals'}, {symbol: 'Ti', family: 'TransitionMetals'}, {symbol: 'V', family: 'TransitionMetals'}, {symbol: 'Cr', family: 'TransitionMetals'}, {symbol: 'Mn', family: 'TransitionMetals'}, {symbol: 'Fe', family: 'TransitionMetals'}, {symbol: 'Co', family: 'TransitionMetals'}, {symbol: 'Ni', family: 'TransitionMetals'}, {symbol: 'Cu', family: 'TransitionMetals'}, {symbol: 'Zn', family: 'TransitionMetals'}, {symbol: 'Ga', family: 'PostTransitionalMetals'}, {symbol: 'Ge', family: 'Metalloids'}, {symbol: 'As', family: 'Metalloids'}, {symbol: 'Se', family: 'NoMetals'}, {symbol: 'Br', family: 'Halogens'}, {symbol: 'Kr', family: 'NobleGases'}],
	[{symbol: 'Rb', family: 'AlkaliMetals'}, {symbol: 'Sr', family: 'AlkalineEarthMetals'}, {symbol: 'Y', family: 'TransitionMetals'}, {symbol: 'Zr', family: 'TransitionMetals'}, {symbol: 'Nb', family: 'TransitionMetals'}, {symbol: 'Mo', family: 'TransitionMetals'}, {symbol: 'Tc', family: 'TransitionMetals'}, {symbol: 'Ru', family: 'TransitionMetals'}, {symbol: 'Rh', family: 'TransitionMetals'}, {symbol: 'Pd', family: 'TransitionMetals'}, {symbol: 'Ag', family: 'TransitionMetals'}, {symbol: 'Cd', family: 'TransitionMetals'}, {symbol: 'In', family: 'PostTransitionalMetals'}, {symbol: 'Sn', family: 'PostTransitionalMetals'}, {symbol: 'Sb', family: 'Metalloids'}, {symbol: 'Te', family: 'Metalloids'}, {symbol: 'I', family: 'Halogens'}, {symbol: 'Xe', family: 'NobleGases'}],
	[{symbol: 'Cs', family: 'AlkaliMetals'}, {symbol: 'Ba', family: 'AlkalineEarthMetals'}, '-', {symbol: 'Hf', family: 'TransitionMetals'}, {symbol: 'Ta', family: 'TransitionMetals'}, {symbol: 'W', family: 'TransitionMetals'}, {symbol: 'Re', family: 'TransitionMetals'}, {symbol: 'Os', family: 'TransitionMetals'}, {symbol: 'Ir', family: 'TransitionMetals'}, {symbol: 'Pt', family: 'TransitionMetals'}, {symbol: 'Au', family: 'TransitionMetals'}, {symbol: 'Hg', family: 'TransitionMetals'}, {symbol: 'Tl', family: 'PostTransitionalMetals'}, {symbol: 'Pb', family: 'PostTransitionalMetals'}, {symbol: 'Bi', family: 'PostTransitionalMetals'}, {symbol: 'Po', family: 'Metalloids'}, {symbol: 'At', family: 'Halogens'}, {symbol: 'Rn', family: 'NobleGases'}],
	[{symbol: 'Fr', family: 'AlkaliMetals'}, {symbol: 'Ra', family: 'AlkalineEarthMetals'}, '-', {symbol: 'Rf', family: 'TransitionMetals'}, {symbol: 'Db', family: 'TransitionMetals'}, {symbol: 'Sg', family: 'TransitionMetals'}, {symbol: 'Bh', family: 'TransitionMetals'}, {symbol: 'Hs', family: 'TransitionMetals'}, {symbol: 'Mt', family: 'TransitionMetals'}, {symbol: 'Ds', family: 'TransitionMetals'}, {symbol: 'Rg', family: 'TransitionMetals'}, {symbol: 'Cn', family: 'TransitionMetals'}, {symbol: 'Nh', family: 'PostTransitionalMetals'}, {symbol: 'Fl', family: 'PostTransitionalMetals'}, {symbol: 'Mc', family: 'PostTransitionalMetals'}, {symbol: 'Lv', family: 'PostTransitionalMetals'}, {symbol: 'Ts', family: 'Halogens'}, {symbol: 'Og', family: 'NobleGases'}],
	['-', '-', {symbol: 'La', family: 'Lanthanides'}, {symbol: 'Ce', family: 'Lanthanides'}, {symbol: 'Pr', family: 'Lanthanides'}, {symbol: 'Nd', family: 'Lanthanides'}, {symbol: 'Pm', family: 'Lanthanides'}, {symbol: 'Sm', family: 'Lanthanides'}, {symbol: 'Eu', family: 'Lanthanides'}, {symbol: 'Gd', family: 'Lanthanides'}, {symbol: 'Tb', family: 'Lanthanides'}, {symbol: 'Dy', family: 'Lanthanides'}, {symbol: 'Ho', family: 'Lanthanides'}, {symbol: 'Er', family: 'Lanthanides'}, {symbol: 'Tm', family: 'Lanthanides'}, {symbol: 'Yb', family: 'Lanthanides'}, {symbol: 'Lu', family: 'Lanthanides'}, '-'],
	['-', '-', {symbol: 'Ac', family: 'Actinides'}, {symbol: 'Th', family: 'Actinides'}, {symbol: 'Pa', family: 'Actinides'}, {symbol: 'U', family: 'Actinides'}, {symbol: 'Np', family: 'Actinides'}, {symbol: 'Pu', family: 'Actinides'}, {symbol: 'Am', family: 'Actinides'}, {symbol: 'Cm', family: 'Actinides'}, {symbol: 'Bk', family: 'Actinides'}, {symbol: 'Cf', family: 'Actinides'}, {symbol: 'Es', family: 'Actinides'}, {symbol: 'Fm', family: 'Actinides'}, {symbol: 'Md', family: 'Actinides'}, {symbol: 'No', family: 'Actinides'}, {symbol: 'Lr', family: 'Actinides'}, '-']
];

const Board = ({ setSelectedItem, selectedFamily }) => {
	const elementsPeriod1 = elements[0].map(e => {
		if (e == '-') {
			return <Col className='Cell'></Col>;
		} else {
			return <Col><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;	
		}
	});

	const elementsPeriod2 = elements[1].map(e => {
		if (e == '-') {
			return <Col className='Cell'></Col>;
		} else {
			return <Col><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const elementsPeriod3 = elements[2].map(e => {
		if (e == '-') {
			return <Col className='Cell'></Col>;
		} else {
			return <Col><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const elementsPeriod4 = elements[3].map(e => {
		if (e == '-') {
			return <Col className='Cell'></Col>;
		} else {
			return <Col><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const elementsPeriod5 = elements[4].map(e => {
		if (e == '-') {
			return <Col className='Cell'></Col>;
		} else {
			return <Col><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const elementsPeriod6 = elements[5].map(e => {
		if (e == '-') {
			return <Col className='Cell'></Col>;
		} else {
			return <Col><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const elementsPeriod7 = elements[6].map(e => {
		if (e == '-') {
			return <Col className='Cell'></Col>;
		} else {
			return <Col><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const lan = elements[7].map(e => {
		if (e == '-') {
			return <Col className='Cell'></Col>;
		} else {
			return <Col><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
		}
	});

	const act = elements[8].map(e => {
		if (e == '-') {
			return <Col className='Cell'></Col>;
		} else {
			return <Col><Element e={e} setSelectedItem={setSelectedItem} selectedFamily={selectedFamily} /></Col>;
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
