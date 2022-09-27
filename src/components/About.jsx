// import aboutImage from "../images/programming.svg";

const About = () => {
	return (
		<section className="about-section px-3 py-5 primary-bg">
			<div className="container my-5 px-3 py-5 p-md-5 light-primary-bg">
				<div className="row flex-md-row-reverse">
					<div className="col">
						<h2 className="section-title text-center display-6 mb-5">
							<span className="underline">About Me</span>
						</h2>
						<div className="about-description">
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Neque iusto quas,
								necessitatibus quibusdam totam, aliquam iste
								assumenda explicabo porro a, itaque voluptates
								doloribus ea temporibus. Illo deserunt similique
								facilis iure!
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Laborum et porro molestias
								omnis molestiae repellendus aliquam culpa quia
								quisquam rerum?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Laborum et porro molestias
								omnis molestiae repellendus aliquam culpa quia
								quisquam rerum?
							</p>
						</div>
					</div>
					{/* <div className="col-md-4">
						<div className="about-img-wrapper">
							<img
								src={aboutImage}
								alt="A guy programming"
								className="img-fluid"
							/>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default About;
