import logo from "./logo.svg";
import "./App.css";
import {render} from "@testing-library/react";
import {Component} from "react";

// If you want to use render method, use Class instead of function
// class App extends Component {
// 	render() {
// 		return (
// 			<div className="App">
// 				<h1>Hello World</h1>
// 			</div>
// 		);
// 	}
// }
// If you use function, just use return, not render method instead
function App() {
	return (
		<div className="App">
			<h1>Hello World</h1>
		</div>
	);
}

export default App;
