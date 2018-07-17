import React from "react";
import '../index.css';


const Navbar = (props) => (
			<nav className="navbar navbar-expand-md navbar-light">
				<span>
					<a className="navbar " href="/index">
						Torture Memory Game
		</a>
				</span>

				<span className="navbar-brand  h1">Click an image to begin!</span>

				<span className="navbar-brand h2">Score: {props.score} | Top Score: {props.topScore}</span>

			</nav>
		)

export default Navbar;
