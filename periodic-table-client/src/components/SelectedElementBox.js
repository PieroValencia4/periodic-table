import './SelectedElementBox.css';

const SelectedElementBox = ({ element }) => (
	<div id="Box">
		<div id="EAtomicNumber">
			{element.atomicNumber}
		</div>
		<div id="ESymbol">
			{element.symbol}
		</div>
		<div id="EName">
			{element.name}
		</div>
	</div>
);

export default SelectedElementBox;
