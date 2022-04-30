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
						<Col>
							<Element e={period1[0]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col>
							<Element e={period1[1]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						<Col>
							<Element e={period2[0]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col>
							<Element e={period2[1]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						{period2.slice(2, 8).map(e => 
							<Col>
								<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
							</Col>							
						)}
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						<Col>
							<Element e={period3[0]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col>
							<Element e={period3[1]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col></Col>
						<Col></Col>
						<Col></Col>
						{period3.slice(2, 8).map(e => 
							<Col>
								<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
							</Col>							
						)}
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						{period4.slice(0, 9).map(e => 
							<Col>
								<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
							</Col>							
						)}
					</Row>
				</Col>
				<Col>
					<Row>
						{period4.slice(9, 18).map(e => 
							<Col>
								<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
							</Col>							
						)}
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						{period5.slice(0, 9).map(e => 
							<Col>
								<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
							</Col>							
						)}
					</Row>
				</Col>
				<Col>
					<Row>
						{period5.slice(9, 18).map(e => 
							<Col>
								<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
							</Col>							
						)}
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						<Col>
							<Element e={period6[0]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col>
							<Element e={period6[1]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col>
							-
						</Col>
						{period6.slice(17, 23).map(e => 
							<Col>
								<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
							</Col>							
						)}
					</Row>
				</Col>
				<Col>
					<Row>
					{period6.slice(23, 32).map(e => 
						<Col>
							<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>							
					)}
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						<Col>
							<Element e={period7[0]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col>
							<Element e={period7[1]} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
						</Col>
						<Col>
							-
						</Col>
						{period7.slice(17, 23).map(e => 
							<Col>
								<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
							</Col>							
						)}
					</Row>
				</Col>
				<Col>
					<Row>
						{period7.slice(23, 32).map(e => 
							<Col>
								<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
							</Col>							
						)}
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
						<Col></Col>
						<Col></Col>
						{period6.slice(2, 9).map(e => 
							<Col>
								<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
							</Col>							
						)}
					</Row>
				</Col>
				<Col>
					<Row>
						{period6.slice(9, 17).map(e => 
							<Col>
								<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
							</Col>							
						)}
						<Col>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<Row>
						<Col></Col>
						<Col></Col>
						{period7.slice(2, 9).map(e => 
							<Col>
								<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
							</Col>							
						)}
					</Row>
				</Col>
				<Col>
					<Row>
						{period7.slice(9, 17).map(e => 
							<Col>
								<Element e={e} setSelectedElement={setSelectedElement} selectedFamily={selectedFamily} />
							</Col>							
						)}
						<Col>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Board;
