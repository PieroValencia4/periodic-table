import './OptionsBar.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CategoryButton = ({ name, color }) => (
	<button style={{backgroundColor: color}}>{name}</button>
);

const OptionsBar = () => {
	return (
		<Container>
			<Row>Categories:</Row>
			<Row>
				<Col sm={2}>
					<CategoryButton name='Noble gases' color='#E7502E' />
				</Col>
				<Col sm={2}>
					<CategoryButton name='Halogens' color='#E78D2E' />
				</Col>
				<Col sm={2}>
					<CategoryButton name='No metals' color='#E7CB2E' />
				</Col>
				<Col sm={2}>
					<CategoryButton name='Metalloids' color='#C5E72E' />
				</Col>
				<Col sm={2}>
					<CategoryButton name='Post-transitional metals' color='#7FE72E' />
				</Col>
				<Col sm={2}>
					<CategoryButton name='Transition metals' color='#2EE736' />
				</Col>
				<Col sm={2}>
					<CategoryButton name='Actinides' color='#2EE78D' />
				</Col>
				<Col sm={2}>
					<CategoryButton name='Lanthanides' color='#2ED9E7' />
				</Col>
				<Col sm={2}>
					<CategoryButton name='Alkaline earth metals' color='#2E6CE7' />
				</Col>
				<Col sm={2}>
					<CategoryButton name='Alkali metals' color='#662EE7' />
				</Col>
			</Row>
		</Container>
	);
};

export default OptionsBar;
