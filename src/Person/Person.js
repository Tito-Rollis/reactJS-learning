// Use props param to insert the property/attribute
const person = (props) => {
	return (
		<p>
			My name is {props.name} and i'm {props.age}
		</p>
	);
};

// props param in class-based
// class Person extends Component {
// render(){
//     return <p>My name is {this.props.name} and i'm {this.props.age}</p>
// }
// }
export default person;
