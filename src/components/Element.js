import './Element.css';

import { useState } from 'react';

const Element = ({ e }) => {
	const [color, setColor] = useState('');
	let className = (e.length > 0) ? 'Cell Element' : 'Cell';

 	return (
		<div className={className}>
			{e}
		</div>
	);
};

export default Element;
