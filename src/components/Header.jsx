import heroImage from "../images/coding.svg";
import IconButton from "./IconButton";
import SocialsContainer from "./Socials/SocialsContainer";
const Header = () => {
	return (
		<header className="header px-3 py-5">
			<div className="container px-3 py-5 p-md-5 mb-5">
				<div className="intro-wrapper">
					<div className="row flex-md-row-reverse">
						<div className="col-md-6 d-flex align-items-end mb-5 mb-md-0 justify-content-center">
							<img
								className="img-fluid"
								src={heroImage}
								alt="An illustration of a boy coding with headphones on"
							/>
						</div>
						<div className="col-lg-6 mt-5 mt-md-0">
							<h5>Hey there,</h5>
							<h1 className="display-2 name">I'm Ebuka</h1>
							<span className="h3 job-title">
								front-end web developer
							</span>
							<p className="my-3">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Obcaecati nostrum modi fugiat
								impedit. Magnam numquam accusamus reiciendis?
								Temporibus, culpa ab.
							</p>
							<div className="btn-container">
								<IconButton
									href="#home"
									name="Hire me"
									icon="bi bi-arrow-right"
								/>
								<IconButton
									href="#home"
									name="Resume"
									icon="bi bi-file-earmark-fill"
								/>
							</div>
							<SocialsContainer className="p-0 m-0 mt-3 d-md-none" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
