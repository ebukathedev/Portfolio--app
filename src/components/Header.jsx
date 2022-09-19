import heroImage from "../images/coding.svg";
import blobImage from "../images/blobanimation.svg";
import IconButton from "./IconButton";
import SocialsContainer from "./Socials/SocialsContainer";
const Header = () => {
	return (
		<header className="header px-3 py-5">
			<div className="container px-3 py-5 p-md-5 mb-5">
				<div className="intro-wrapper">
					<div className="row flex-md-row-reverse">
						<div className="col-md-6 d-flex align-items-end mb-5 mb-md-0 justify-content-center">
							<div className="hero-img-wrapper">
								<div className="blob">
									<img src={blobImage} alt="blob" />
								</div>
								<img
									className="img-fluid hero-img"
									src={heroImage}
									alt="An illustration of a boy coding with headphones on"
								/>
							</div>
						</div>
						<div className="col-lg-6 mt-5 mt-md-0">
							<h5>Hey there,</h5>
							<h1 className="display-2 name">I'm Ebuka.</h1>
							<h3 className="h2 m-0 job-title">
								front-end web developer
							</h3>
							<p className="mt-4 mb-5 lead">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Qui consequatur quaerat illo
								facere eaque, rerum odio molestiae quae velit
								accusantium!
							</p>
							<div className="btn-container">
								<IconButton href="#home" name="Hire me" />
								<IconButton href="#home" name="Resume" />
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
