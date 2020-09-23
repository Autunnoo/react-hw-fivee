import React from "react";
import './regaStyle.css';

import { Link } from "react-router-dom";

function Start() {
	return (
			<div className="start">
				<h1>
				I am visiting you, {" "}
					{`${localStorage.getItem("firstName")}   ${ localStorage.getItem("lastName")}`}
				</h1>
				<Link to="/login">
					<button>Exit</button>
				</Link>
			</div>
	);
}

export default Start;