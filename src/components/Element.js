import './Element.css';

import { useState } from 'react';

const Element = ({ e, setSelectedItem }) => {
	const [color, setColor] = useState('');
	let className = (e.length > 0) ? 'Cell Element' : 'Cell';

 	return (
		<div className={className} onClick={() => setSelectedItem(e)}>
			{e}
		</div>
	);
};

export default Element;
