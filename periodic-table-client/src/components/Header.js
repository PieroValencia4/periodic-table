import './Header.css';
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => {
	return (
		<Container className="Header">
			<Row>
				<Col sm={1}>
					<img id='img1' src='chemistry.png' />
				</Col>
				<Col sm={10}>
					<h1>Periodic Table</h1>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
