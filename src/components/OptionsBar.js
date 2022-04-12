import './OptionsBar.css';
import { Col, Container, Row } from 'react-bootstrap';

const FamilyButton = ({ name, color, setSelectedFamily }) => (
	<button style={{backgroundColor: color}} onClick={() => setSelectedFamily(name)}>{name}</button>
);

const OptionsBar = ({ selectedItem, setSelectedFamily }) => {
	return (
		<Container fluid>
			<Row>
				<Col sm={8}>
					<Row>
						<Col>
							<b>Family</b>
						</Col>
					</Row>
					<Row>
						<Col>
							<FamilyButton name='AlkaliMetals' color='#662EE7' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton name='AlkalineEarthMetals' color='#2E6CE7' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton name='TransitionMetals' color='#2EE736' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton name='PostTransitionalMetals' color='#7FE72E' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton name='Metalloids' color='#C5E72E' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton name='NoMetals' color='#E7CB2E' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton name='Halogens' color='#E78D2E' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton name='NobleGases' color='#E7502E' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton name='Lanthanides' color='#2ED9E7' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton name='Actinides' color='#2EE78D' setSelectedFamily={setSelectedFamily} />
						</Col>
					</Row>
				</Col>
				<Col sm={4}>
					<div id="Element">
						{selectedItem}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default OptionsBar;
