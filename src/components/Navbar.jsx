import { useState } from "react";
import logo from "../images/logo.svg";
import SocialLink from "./Socials/SocialLink";

const Navbar = ({ isMenuOpen }) => {
	const [change, setChange] = useState("");
	const openMenu = () => {
		isMenuOpen = !isMenuOpen;
		console.log(isMenuOpen);
		isMenuOpen ? setChange("change") : setChange("");
		isMenuOpen ? console.log("open") : console.log("close");
	};

	return (
		<nav className="navbar navbar-expand-md primary-bg p-2">
			<div className="container d-block d-md-flex">
				{/* nav header */}
				<div className="nav-header d-flex justify-content-between align-items-center">
					<a className="navbar-brand" href="#home">
						<img src={logo} alt="ebuka" />
					</a>
					<button
						className={`hamburger_menu d-flex flex-column d-md-none ${change}`}
						onClick={openMenu}
					>
						<span className="bar1"></span>
						<span className="bar2"></span>
						<span className="bar3"></span>
					</button>
				</div>

				{/* nav links */}
				<ul className="navbar-nav links d-md-flex p-md-0">
					<li>
						<a className="scroll-link" href="#home">
							home
						</a>
					</li>
					<li>
						<a className="scroll-link" href="#projects">
							projects
						</a>
					</li>
					<li>
						<a className="scroll-link" href="#about">
							about
						</a>
					</li>
					<li>
						<a className="scroll-link" href="#contact">
							contact
						</a>
					</li>
				</ul>
				{/* socials  */}
				<ul className="navbar-nav social-icons d-none d-md-flex">
					<SocialLink href="#home" icon="bi bi-github" />
					<SocialLink href="#home" icon="bi bi-twitter" />
					<SocialLink href="#home" icon="bi bi-linkedin" />
					<SocialLink href="#home" icon="bi bi-file-earmark-fill" />
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;
