import './App.css';
import { Component } from 'react';

import Board from './Board';
import Header from './Header';
import OptionsBar from './OptionsBar';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {elements: {}, families: [], selectedFamily: '', selectedElement: {}};
		this.setSelectedFamily = this.setSelectedFamily.bind(this);
		this.setSelectedElement = this.setSelectedElement.bind(this);
	}

    componentDidMount() {
        fetch('http://localhost:8080/families')
            .then(resp => resp.json())
            .then(data => this.setState({families: data}));

        fetch('http://localhost:8080/elements')
            .then(resp => resp.json())
            .then(data => this.setState({elements: data, selectedElement: data['Period 1'][0]}));
    }

	setSelectedFamily(family) {
		this.setState({selectedFamily: family});
	}

	setSelectedElement(element) {
		this.setState({selectedElement: element});
	}

	render() {
		const {elements, families, selectedFamily, selectedElement} = this.state;
		let optionsBar = <h3>Loading...</h3>;
		let board = <h3>Loading...</h3>;

		if (families.length !== 0) {
			optionsBar = <OptionsBar families={families} selectedElement={selectedElement} setSelectedFamily={this.setSelectedFamily} />;
		}

		if (Object.keys(elements).length !== 0) {
			board = <Board elements={elements} setSelectedElement={this.setSelectedElement} selectedFamily={selectedFamily} />;
		}

		return (
		    <div className='App'>
		    	<Header />
		    	{optionsBar}
		 		{board}   	
		    </div>
		);
	}
}


export default App;
