import './Board.css';
import { Col, Container, Row } from 'react-bootstrap';

import Element from './Element';

const periods = 7;
const groups = 18;

const elements = [
	['H', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'He'],
	['Li', 'Be', '', '', '', '', '', '', '', '', '', '', 'B', 'C', 'N', 'O', 'F', 'Ne'],
	['Na', 'Mg', '', '', '', '', '', '', '', '', '', '', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'],
	['K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr'],
	['Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe'],
	['Cs', 'Ba', '-', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn'],
	['Fr', 'Ra', '-', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'],
	['', '', '', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', ''],
	['', '', '', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', '']
];

const Board = ({ setSelectedItem }) => {
	const elementsPeriod1 = elements[0].map(e =>
		<Col><Element e={e} setSelectedItem={setSelectedItem} /></Col>
	);

	const elementsPeriod2 = elements[1].map(e =>
		<Col><Element e={e} setSelectedItem={setSelectedItem} /></Col>
	);

	const elementsPeriod3 = elements[2].map(e =>
		<Col><Element e={e} setSelectedItem={setSelectedItem} /></Col>
	);

	const elementsPeriod4 = elements[3].map(e =>
		<Col><Element e={e} setSelectedItem={setSelectedItem} /></Col>
	);

	const elementsPeriod5 = elements[4].map(e =>
		<Col><Element e={e} setSelectedItem={setSelectedItem} /></Col>
	);

	const elementsPeriod6 = elements[5].map(e =>
		<Col><Element e={e} setSelectedItem={setSelectedItem} /></Col>
	);

	const elementsPeriod7 = elements[6].map(e =>
		<Col><Element e={e} setSelectedItem={setSelectedItem} /></Col>
	);

	const lan = elements[7].map(e =>
		<Col><Element e={e} setSelectedItem={setSelectedItem} /></Col>
	);

	const act = elements[8].map(e =>
		<Col><Element e={e} setSelectedItem={setSelectedItem} /></Col>
	);

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
