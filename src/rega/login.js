import React , {Component} from "react";
import { Link, Redirect } from "react-router-dom";
import './regaStyle.css';
import padlock from "../img/padlock.png"

export default class Login extends Component {
	state = {
		email: '',
		password: '',
		rememberMe: false,
		isLogged: false,
	};

	handleChange = (event) => {
		const input = event.target;
		const value = input.type === 'checkbox' ? input.checked : input.value;
		this.setState({[input.name]: value});
	};

	handleFormSubmit = () => {
		const { email, password, rememberMe } = this.state;
		localStorage.setItem('rememberMe', rememberMe);
		localStorage.setItem('email', rememberMe ? email : '');
		localStorage.setItem('password', rememberMe ? password : '');
	};

	componentDidMount() {
		const rememberMe = localStorage.getItem('rememberMe') === 'true';
		const email = rememberMe ? localStorage.getItem('email') : '';
		const password = rememberMe ? localStorage.getItem('password') : '';
		this.setState({ email, rememberMe });
		this.setState({ password, rememberMe });
	}

	clickHandler = (e) => {
		e.preventDefault();
		if (
				this.state.email === localStorage.getItem("email") &&
				this.state.password === localStorage.getItem("password")
		) {
			localStorage.setItem("rememberMe", this.state.rememberMe);
			this.setState({isLogged: true});
			console.log("You are logged in");
		} else {
			alert("Email or password is wrong");
		}
	};

	render() {
		return (
				<div className={"sign-wrapper"}>
					{this.state.isLogged ? <Redirect to="/start" /> : null}
					<div className={"sign-title"}>
						<div className={"sign-img"}>
							<img src={padlock} alt="padlock_img" />
						</div>
						<p>Sign in</p>
					</div>
					<div className={"sign-form"}>
						<form onSubmit={this.handleFormSubmit}>
								<input name="email"
											 type="email"
											 value={this.state.email}
											 onChange={this.handleChange}
											 placeholder="Email Address *"
											 title="example@gmail.com"/>
								<input name="password"
											 type="password"
											 value={this.state.password}
											 onChange={this.handleChange}
											 placeholder="Password *"
											 title="At least 8 characters, contain uppercase and lowercase letters" />
							<label>
								<input name="rememberMe"
											 checked={this.state.rememberMe}
											 onChange={this.handleChange}
											 type="checkbox" />
								<span>Remember me</span>
							</label>
							<button onClick={this.clickHandler} type="submit">Sign In</button>
						</form>
					<div className={"sign-link"}>
						<Link to="/login">Forgot password?</Link>
						<Link to="/register">Don`t have an account? Sign Up</Link>
					</div>
				</div>
			<div className={"copyright"}>Copyright © Pashka Kharkavshyk 2020.</div>
		</div>
		);
	}
}

