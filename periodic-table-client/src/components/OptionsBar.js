import './OptionsBar.css';
import SelectedElementBox from './SelectedElementBox';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

const FamilyButton = ({ family, color, setSelectedFamily }) => {
	const [familyButtonStyle, setFamilyButtonStyle] = useState('FamilyButtonMouseOut');

	return (
		<Container
			className='FamilyButton'
			style={{backgroundColor: color}}
			onClick={() => setSelectedFamily(family.name)}
			onMouseOver={() => setFamilyButtonStyle('FamilyButtonMouseOver')}
			onMouseOut={() => setFamilyButtonStyle('FamilyButtonMouseOut')}
		>
			<Row>
				<Col sm={2}>
					<img id='img2' className={familyButtonStyle} src='chemistry.png' />
				</Col>
				<Col sm={10}>
					{`${family.name} (${family.total})`}
				</Col>				
			</Row>
		</Container>
	);
};

const OptionsBar = ({ families, selectedElement, setSelectedFamily }) => {
	return (
		<Container fluid className='OptionsBar'>
			<Row>
				<Col sm={10}>
					<Row>
						<FamilyButton family={families[0]} color='#2ED9E7' setSelectedFamily={setSelectedFamily} />
						<FamilyButton family={families[1]} color='#2E6CE7' setSelectedFamily={setSelectedFamily} />
						<FamilyButton family={families[2]} color='#2EE736' setSelectedFamily={setSelectedFamily} />
						<FamilyButton family={families[3]} color='#7FE72E' setSelectedFamily={setSelectedFamily} />
						<FamilyButton family={families[4]} color='#C5E72E' setSelectedFamily={setSelectedFamily} />
					</Row>
					<Row>
						<FamilyButton family={families[6]} color='#E78D2E' setSelectedFamily={setSelectedFamily} />
						<FamilyButton family={families[7]} color='#E7502E' setSelectedFamily={setSelectedFamily} />
						<FamilyButton family={families[8]} color='#662EE7' setSelectedFamily={setSelectedFamily} />
						<FamilyButton family={families[9]} color='#2EE78D' setSelectedFamily={setSelectedFamily} />
						<FamilyButton family={families[10]} color='#196650' setSelectedFamily={setSelectedFamily} />
					</Row>
				</Col>
				<Col sm={2}>
					<SelectedElementBox element={selectedElement} />
				</Col>
			</Row>
		</Container>
	);
};

export default OptionsBar;
