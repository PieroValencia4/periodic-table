import './OptionsBar.css';
import { Col, Container, Row } from 'react-bootstrap';

const FamilyButton = ({ family, color, setSelectedFamily }) => (
	<button style={{backgroundColor: color}} onClick={() => setSelectedFamily(family.name)}>
		{`${family.name} (${family.total})`}
	</button>
);

const OptionsBar = ({ families, selectedItem, setSelectedFamily }) => {
	return (
		<Container fluid>
			<Row>
				<Col sm={10}>
					<Row>
						<Col>
							<b>Family</b>
						</Col>
					</Row>
					<Row>
						<Col>
							<FamilyButton family={families[0]} color='#2ED9E7' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton family={families[1]} color='#2E6CE7' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton family={families[2]} color='#2EE736' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton family={families[3]} color='#7FE72E' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton family={families[4]} color='#C5E72E' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton family={families[6]} color='#E78D2E' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton family={families[7]} color='#E7502E' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton family={families[8]} color='#662EE7' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton family={families[9]} color='#2EE78D' setSelectedFamily={setSelectedFamily} />
						</Col>
						<Col>
							<FamilyButton family={families[10]} color='#196650' setSelectedFamily={setSelectedFamily} />
						</Col>
					</Row>
				</Col>
				<Col sm={2}>
					<div id="Element">
						{selectedItem}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default OptionsBar;
