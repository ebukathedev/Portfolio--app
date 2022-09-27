import React from "react";

const Contact = () => {
	return (
		<section className="contact-section px-3 py-5 primary-bg">
			<div className="container my-5 px-3 py-5 p-md-5">
				<h2 className="section-title text-center display-6 mb-5">
					<span className="underline">Get In Touch</span>
				</h2>
				<form className="light-primary-bg py-5 px-4">
					<div className="input-area">
						<label htmlFor="">Name</label>
						<input type="text" className="form-control" />
					</div>
					<div className="input-area">
						<label htmlFor="">Email</label>
						<input type="text" className="form-control" />
					</div>
					<div className="input-area">
						<label htmlFor="">Message</label>
						<textarea
							className="form-control"
							name="message"
							placeholder="Message"
							rows="5"
						></textarea>
					</div>
					<button type="submit" className="btn py-2 px-4">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
