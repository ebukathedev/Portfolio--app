import SocialLink from "./SocialLink";

const SocialsContainer = ({ className }) => {
	return (
		<ul className={`social-icons d-flex ${className}`}>
			<SocialLink href="#home" icon="bi bi-github" />
			<SocialLink href="#home" icon="bi bi-twitter" />
			<SocialLink href="#home" icon="bi bi-linkedin" />
		</ul>
	);
};

export default SocialsContainer;
