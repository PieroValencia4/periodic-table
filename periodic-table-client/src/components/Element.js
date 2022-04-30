import './Element.css';

const Element = ({ e, setSelectedElement, selectedFamily }) => {
	const colors = new Map();
	colors.set('Alkaline earth metals', 'AlkalineEarthMetals');
	colors.set('Alkali metals', 'AlkaliMetals');
	colors.set('Transition metals', 'TransitionMetals');
	colors.set('Post-transition metal', 'PostTransitionMetal');
	colors.set('Metalloids', 'Metalloids');
	colors.set('Superactinides', 'Superactinides');
	colors.set('Other nonmetals', 'OtherNonmetals');
	colors.set('Halogens', 'Halogens');
	colors.set('Noble gases', 'NobleGases');
	colors.set('Lanthanides', 'Lanthanides');
	colors.set('Actinides', 'Actinides');

	const name = e.family.name;
	const color = (selectedFamily === name) ? colors.get(name) : 'DefaultColor';
	const className = 'Cell Element ' + color;

 	return (
		<div className={className} onClick={() => setSelectedElement(e.symbol)}>
			{e.symbol}
		</div>
	);
};

export default Element;
