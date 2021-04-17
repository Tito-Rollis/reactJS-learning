import "./App.css";
import React, {useState} from "react";
// Inporting Person.js
import Person from "./Person/Person";
import {render} from "@testing-library/react";

// If you use function, just use return, not render method instead
// Use () for multiline
// function App() {
// 	return (
// 		<div className="App">
// 			<h1>Hello World</h1>
// 		</div>
// 	);
// }

// You can also use createElement method for returning
// first parameter is for the HTML element, second is for props (use null if no props), third is either be the string or new element child element (if elemenet use React.createElement())
// class App extends Component {
// 	render() {
// 		return React.createElement(
// 			"div",
// 			{className: "App"},
// 			React.createElement("h1", null, "Hello World")
// 		);
// 	}
// }

// If you want to use render method, use Class instead of function
// NOTE : You have only use one Container, so if you want to add new elements, put it in one container
// class App extends Component {
// 	switchNameHandler= () =>{
// 		console.log("Hello React!");
// 	}
// // use onEvent (e.g. onClick) not onevent
// 	render() {
// 		return (
// 			<div className="App">
// 				<h1>Hello World</h1>
// 				<Person name="Tito" age="27" />
// 				<Person name="Wella" age="26">
// 					<h1>this is props.children inside element</h1>
// 					this.props.children without element
// 				</Person>

// 				<button onClick={this.switchNameHandler}>Click Here</button>
// 			</div>
// 		);
// 	}
// }

// Using State Hook within Class component
class App extends React.Component {
	state = {
		persons: [
			{name: "Max", age: 28},
			{name: "Manu", age: 29},
			{name: "Stephanie", age: 26},
		],
	};

	switchNameHandler = () => {
		this.setState({
			persons: [
				{name: "Tito Rollis", age: 27},
				{name: "Wella", age: 26},
				{name: "Stephanie", age: 26},
			],
		});
	};

	render() { 
		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
					My Hobbies: Racing
				</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
			</div>
		);
	}
}

// Using State Hook within function component
// const App = (props) => {
// 	const [personsState, setPersonsState] = useState({
// 		persons: [
// 			{name: "Max", age: 28},
// 			{name: "Manu", age: 29},
// 			{name: "Stephanie", age: 26},
// 		],
// 	});

// 	const [otherState, setOtherState] = useState("some other value");

// 	const switchNameHandler = () => {
// 		// DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
// 		setPersonsState({
// 			persons: [
// 				{name: "Maximilian", age: 28},
// 				{name: "Manu", age: 29},
// 				{name: "Stephanie", age: 27},
// 			],
// 		});
// 	};

// 	return (
// 		<div className="App">
// 			<h1>Hi, I'm a React App</h1>
// 			<p>This is really working!</p>
// 			<button onClick={switchNameHandler}>Switch Name</button>
// 			<Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
// 			<Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
// 				My Hobbies: Racing
// 			</Person>
// 			<Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
// 		</div>
// 	);
// };

export default App;
