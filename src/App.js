import React from "react";
import Images from "./torture.json"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Devices from "./components/Devices";

class App extends React.Component {

	state = {
		deviceArray: [],
		score: 0,
		topScore: 0,
		clickedImages: []
	}
	randomDevice = () => {
		let deviceArray = [];
		for (let i = 0; deviceArray.length < 12; i++) {
			let index = Math.floor(Math.random() * Images.length);
			if (!deviceArray.includes(Images[index])) {
				deviceArray.push(Images[index]);
			}
		}
		return deviceArray;
	};

	componentDidMount() {
		this.setState({ deviceArray: this.randomDevice() })
	}

	handleUnique = (clicked) => {
		let newScore = this.state.score + 1;
		this.setState({
			score: newScore,
			topScore: newScore > this.state.topScore ? newScore : this.state.topScore,
			deviceArray: this.randomDevice(),
			clickImages: this.state.clickedImages.push(clicked)
		})
	}

	handleDuplicate = () => {
		alert("You hit a duplicate! You're score was " + this.state.score)
		this.setState({
			clickedImages: [],
			score: 0,
			deviceArray: this.randomDevice()
		})
	}

	handleClick = (clicked) => {
		console.log(clicked)
		console.log(this.state.clickedImages.includes(clicked))
		this.state.clickedImages.includes(clicked) ? this.handleDuplicate() : this.handleUnique(clicked);
	}



	render() {
		return (
			<div className="container-fluid">
				<Navbar
					score={this.state.score}
					topScore={this.state.topScore}
				/>
				<Header />
				<devices
					deviceArray={this.state.deviceArray}
					handleClick={this.handleClick}
				/>
			</div>
		);
	}
}

export default App;
