import React , {Component} from "react";
import { Link } from "react-router-dom";
import './regaStyle.css';
import padlock from "../img/padlock.png"

const checkInput = (target, regEx) => {
	if (target.value.match(regEx)) {
		target.style.borderColor = "green";
	} else {
		target.style.borderColor = "red";
	}
};

const nameRegExp = /^[a-z]{3,}/i;
const passwordRegEx = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}/;

export default class Register extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		subscribe: false,
	};

	handleChange = (event) => {
		const input = event.target;
		this.setState({[input.name]: input.value});
		if (input.name === "firstName") {
			checkInput(input, nameRegExp);
			this.setState({[input.name]: input.value});
		} else if (input.name === "lastName") {
			checkInput(input, nameRegExp);
			this.setState({[input.name]: input.value});
		} else if (input.name === "password") {
			checkInput(input, passwordRegEx);
			this.setState({[input.name]: input.value});
		} else if (input.name === "subscribe") {
			this.setState({[input.name]: !this.state.subscribe});
		}
	};

	addNewRegister = (event) => {
		event.preventDefault();
		if (
				this.state.firstName.match(nameRegExp) &&
				this.state.lastName.match(nameRegExp) &&
				this.state.password.match(passwordRegEx)
		) {
			localStorage.setItem("firstName", this.state.firstName);
			localStorage.setItem("lastName", this.state.lastName);
			localStorage.setItem("email", this.state.email);
			localStorage.setItem("password", this.state.password);
			localStorage.setItem("subscribe", this.state.subscribe);
			localStorage.removeItem("rememberMe");
			window.location.reload(false);
		}
		
	};

	render() {
		return (
				<div className={"sign-wrapper"}>
					<div className={"sign-title"}>
						<div className={"sign-img"}>
							<img src={padlock} alt="padlock_img" />
						</div>
						<p>Sign Up</p>
					</div>
					<div className={"sign-form"}>
						<form onSubmit={this.handleFormSubmit}>
							<div>
								<input
										type="text"
										name="firstName"
										onChange={this.handleChange}
										value={this.state.firstName}
										placeholder="First Name *"
										required />
								<input
										type="text"
										name="lastName"
										onChange={this.handleChange}
										value={this.state.lastName}
										placeholder="Last Name *"
										required />
							</div>
							<input name="email"
										 type="email"
										 value={this.state.email}
										 onChange={this.handleChange}
										 placeholder="Email Address *"
										 required/>
							<input name="password"
										 type="password"
										 value={this.state.password}
										 onChange={this.handleChange}
										 placeholder="Password *"
										 title="At least 8 characters, contain uppercase and lowercase letters"
										 required/>
							<label>
								<input name="subscribe"
											 checked={this.state.subscribe}
											 onChange={this.handleChange}
											 type="checkbox" />
								<span className={"subscribe-text"}>
              		I want to receive inspiration, marketing promotions and updates via email
            		</span>
							</label>
							<button onClick={this.addNewRegister} type="submit">Sign Up</button>
						</form>
						<div className={'sign-linkUp'}>
							<Link to="/login">Already have an account? Sign In</Link>
						</div>
					</div>
					<div className={"copyright"}>Copyright © Pashka Kharkavshyk 2020.</div>
				</div>
		);
	}
}
