import './Element.css';

const Element = ({ e }) => {
	let className = (e.length > 0) ? 'Cell Element' : 'Cell';

 	return (
		<div className={className}>
			{e}
		</div>
	);
};

export default Element;
