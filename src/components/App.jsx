import { React, Component } from 'react';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currPlayer
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				hi from react
				<Board />
			</div>
		)
	}
}

export default App;