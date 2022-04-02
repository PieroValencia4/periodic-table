import './Element.css';

import { useState } from 'react';

const Element = ({ e, setSelectedItem, selectedFamily }) => {
	let className = 'Cell Element';

	const color = (selectedFamily === e.family) ? e.family : 'DefaultColor';
	className = className + ' ' + color;

 	return (
		<div className={className} onClick={() => setSelectedItem(e.symbol)}>
			{e.symbol}
		</div>
	);
};

export default Element;
