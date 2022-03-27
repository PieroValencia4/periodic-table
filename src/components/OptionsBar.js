import './OptionsBar.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CategoryButton = ({ name, color }) => (
	<button style={{backgroundColor: color}}>{name}</button>
);

const OptionsBar = ({ selectedItem }) => {
	return (
		<Container>
			<Row>
				<Col sm={8}>
					<Row>Categories:</Row>
					<Row>
						<Col>
							<CategoryButton name='Noble gases' color='#E7502E' />
						</Col>
						<Col>
							<CategoryButton name='Halogens' color='#E78D2E' />
						</Col>
						<Col>
							<CategoryButton name='No metals' color='#E7CB2E' />
						</Col>
						<Col>
							<CategoryButton name='Metalloids' color='#C5E72E' />
						</Col>
						<Col>
							<CategoryButton name='Post-transitional metals' color='#7FE72E' />
						</Col>
						<Col>
							<CategoryButton name='Transition metals' color='#2EE736' />
						</Col>
						<Col>
							<CategoryButton name='Actinides' color='#2EE78D' />
						</Col>
						<Col>
							<CategoryButton name='Lanthanides' color='#2ED9E7' />
						</Col>
						<Col>
							<CategoryButton name='Alkaline earth metals' color='#2E6CE7' />
						</Col>
						<Col>
							<CategoryButton name='Alkali metals' color='#662EE7' />
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
