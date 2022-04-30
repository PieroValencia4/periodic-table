import './Board.css';
import './Element.css';
import { Col, Container, Row } from 'react-bootstrap';

import Element from './Element';

const Board = ({ elements, setSelectedElement, selectedFamily }) => {
	const period1 = elements['Period 1'];
	const period2 = elements['Period 2'];
	const period3 = elements['Period 3'];
	const period4 = elements['Period 4'];
	const period5 = elements['Period 5'];
	const period6 = elements['Period 6'];
	const period7 = elements['Period 7'];

	return (
		<Container fluid className="Board-content">
			<Row>
				<Col>
					<Row>
						<Col key={period1[0].atomicNumber}>
							<Element e={period1[0]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col></Col><Col></Col><Col></Col>
						<Col></Col><Col></Col><Col></Col>
						<Col></Col><Col></Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col></Col><Col></Col><Col></Col>
						<Col></Col><Col></Col><Col></Col>
						<Col></Col><Col></Col>
						<Col key={period1[1].atomicNumber}>
							<Element e={period1[1]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						<Col key={period2[0].atomicNumber}>
							<Element e={period2[0]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period2[1].atomicNumber}>
							<Element e={period2[1]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col></Col><Col></Col><Col></Col>
						<Col></Col><Col></Col><Col></Col>
						<Col></Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col></Col><Col></Col><Col></Col>
						<Col key={period2[2].atomicNumber}>
							<Element e={period2[2]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period2[3].atomicNumber}>
							<Element e={period2[3]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period2[4].atomicNumber}>
							<Element e={period2[4]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period2[5].atomicNumber}>
							<Element e={period2[5]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period2[6].atomicNumber}>
							<Element e={period2[6]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period2[7].atomicNumber}>
							<Element e={period2[7]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						<Col key={period3[0].atomicNumber}>
							<Element e={period3[0]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period3[1].atomicNumber}>
							<Element e={period3[1]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col></Col><Col></Col><Col></Col><Col></Col>
						<Col></Col><Col></Col><Col></Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col></Col><Col></Col><Col></Col>
						<Col key={period3[2].atomicNumber}>
							<Element e={period3[2]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period3[3].atomicNumber}>
							<Element e={period3[3]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period3[4].atomicNumber}>
							<Element e={period3[4]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period3[5].atomicNumber}>
							<Element e={period3[5]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period3[6].atomicNumber}>
							<Element e={period3[6]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period3[7].atomicNumber}>
							<Element e={period3[7]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						<Col key={period4[0].atomicNumber}>
							<Element e={period4[0]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[1].atomicNumber}>
							<Element e={period4[1]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[2].atomicNumber}>
							<Element e={period4[2]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[3].atomicNumber}>
							<Element e={period4[3]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[4].atomicNumber}>
							<Element e={period4[4]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[5].atomicNumber}>
							<Element e={period4[5]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[6].atomicNumber}>
							<Element e={period4[6]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[7].atomicNumber}>
							<Element e={period4[7]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[8].atomicNumber}>
							<Element e={period4[8]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col key={period4[9].atomicNumber}>
							<Element e={period4[9]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[10].atomicNumber}>
							<Element e={period4[10]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[11].atomicNumber}>
							<Element e={period4[11]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[12].atomicNumber}>
							<Element e={period4[12]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[13].atomicNumber}>
							<Element e={period4[13]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[14].atomicNumber}>
							<Element e={period4[14]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[15].atomicNumber}>
							<Element e={period4[15]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[16].atomicNumber}>
							<Element e={period4[16]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period4[17].atomicNumber}>
							<Element e={period4[17]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						<Col key={period5[0].atomicNumber}>
							<Element e={period5[0]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[1].atomicNumber}>
							<Element e={period5[1]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[2].atomicNumber}>
							<Element e={period5[2]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[3].atomicNumber}>
							<Element e={period5[3]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[4].atomicNumber}>
							<Element e={period5[4]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[5].atomicNumber}>
							<Element e={period5[5]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[6].atomicNumber}>
							<Element e={period5[6]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[7].atomicNumber}>
							<Element e={period5[7]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[8].atomicNumber}>
							<Element e={period5[8]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col key={period5[9].atomicNumber}>
							<Element e={period5[9]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[10].atomicNumber}>
							<Element e={period5[10]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[11].atomicNumber}>
							<Element e={period5[11]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[12].atomicNumber}>
							<Element e={period5[12]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[13].atomicNumber}>
							<Element e={period5[13]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[14].atomicNumber}>
							<Element e={period5[14]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[15].atomicNumber}>
							<Element e={period5[15]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[16].atomicNumber}>
							<Element e={period5[16]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period5[17].atomicNumber}>
							<Element e={period5[17]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						<Col key={period6[0].atomicNumber}>
							<Element e={period6[0]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[1].atomicNumber}>
							<Element e={period6[1]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={'La'}>
							-
						</Col>
						<Col key={period6[17].atomicNumber}>
							<Element e={period6[17]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[18].atomicNumber}>
							<Element e={period6[18]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[19].atomicNumber}>
							<Element e={period6[19]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[20].atomicNumber}>
							<Element e={period6[20]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[21].atomicNumber}>
							<Element e={period6[21]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[22].atomicNumber}>
							<Element e={period6[22]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col key={period6[23].atomicNumber}>
							<Element e={period6[23]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[24].atomicNumber}>
							<Element e={period6[24]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[25].atomicNumber}>
							<Element e={period6[25]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[26].atomicNumber}>
							<Element e={period6[26]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[27].atomicNumber}>
							<Element e={period6[27]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[28].atomicNumber}>
							<Element e={period6[28]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[29].atomicNumber}>
							<Element e={period6[29]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[30].atomicNumber}>
							<Element e={period6[30]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[31].atomicNumber}>
							<Element e={period6[31]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						<Col key={period7[0].atomicNumber}>
							<Element e={period7[0]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[1].atomicNumber}>
							<Element e={period7[1]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={'Ac'}>
							-
						</Col>
						<Col key={period7[17].atomicNumber}>
							<Element e={period7[17]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[18].atomicNumber}>
							<Element e={period7[18]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[19].atomicNumber}>
							<Element e={period7[19]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[20].atomicNumber}>
							<Element e={period7[20]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[21].atomicNumber}>
							<Element e={period7[21]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[22].atomicNumber}>
							<Element e={period7[22]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col key={period7[23].atomicNumber}>
							<Element e={period7[23]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[24].atomicNumber}>
							<Element e={period7[24]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[25].atomicNumber}>
							<Element e={period7[25]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[26].atomicNumber}>
							<Element e={period7[26]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[27].atomicNumber}>
							<Element e={period7[27]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[28].atomicNumber}>
							<Element e={period7[28]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[29].atomicNumber}>
							<Element e={period7[29]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[30].atomicNumber}>
							<Element e={period7[30]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[31].atomicNumber}>
							<Element e={period7[31]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					{'-'}
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						<Col></Col><Col></Col>
						<Col key={period6[2].atomicNumber}>
							<Element e={period6[2]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[3].atomicNumber}>
							<Element e={period6[3]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[4].atomicNumber}>
							<Element e={period6[4]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[5].atomicNumber}>
							<Element e={period6[5]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[6].atomicNumber}>
							<Element e={period6[6]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[7].atomicNumber}>
							<Element e={period6[7]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[8].atomicNumber}>
							<Element e={period6[8]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col key={period6[9].atomicNumber}>
							<Element e={period6[9]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[10].atomicNumber}>
							<Element e={period6[10]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[11].atomicNumber}>
							<Element e={period6[11]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[12].atomicNumber}>
							<Element e={period6[12]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[13].atomicNumber}>
							<Element e={period6[13]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[14].atomicNumber}>
							<Element e={period6[14]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[15].atomicNumber}>
							<Element e={period6[15]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period6[16].atomicNumber}>
							<Element e={period6[16]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col></Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						<Col></Col><Col></Col>
						<Col key={period7[2].atomicNumber}>
							<Element e={period7[2]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[3].atomicNumber}>
							<Element e={period7[3]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[4].atomicNumber}>
							<Element e={period7[4]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[5].atomicNumber}>
							<Element e={period7[5]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[6].atomicNumber}>
							<Element e={period7[6]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[7].atomicNumber}>
							<Element e={period7[7]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[8].atomicNumber}>
							<Element e={period7[8]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col key={period7[9].atomicNumber}>
							<Element e={period7[9]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[10].atomicNumber}>
							<Element e={period7[10]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[11].atomicNumber}>
							<Element e={period7[11]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[12].atomicNumber}>
							<Element e={period7[12]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[13].atomicNumber}>
							<Element e={period7[13]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[14].atomicNumber}>
							<Element e={period7[14]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[15].atomicNumber}>
							<Element e={period7[15]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col key={period7[16].atomicNumber}>
							<Element e={period7[16]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col></Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Board;
