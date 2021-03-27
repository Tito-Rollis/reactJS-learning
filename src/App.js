import "./App.css";
import React, {Component} from "react";
// Inporting Person.js
import Person from "./Person/Person";

// If you use function, just use return, not render method instead
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
class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hello World</h1>
				<Person name="Tito" age="27" />
				<Person name="Wella" age="26" />
			</div>
		);
	}
}

export default App;
