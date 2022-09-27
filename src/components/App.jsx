import Header from "./Header";
import Navbar from "./Navbar";
import SectionDivider from "./SectionDivider";
import heroSectionDivider from "../images/paint-drip-top.svg";
import skillsSectionDivider from "../images/paint-drip-bottom.svg";
import ProjectsContainer from "./Projects section/ProjectsContainer";
import SkillsContainer from "./Skills section/SkillsContainer";
import About from "./About";
import Contact from "./Contact";
let menuOpen = false;

const App = () => {
	return (
		<>
			<Navbar isMenuOpen={menuOpen} />
			<Header />
			<SectionDivider
				img={heroSectionDivider}
				alt="paint dripping down"
				bgColor="lighter-primary-bg"
			/>
			<ProjectsContainer />
			<SkillsContainer />
			<SectionDivider
				img={skillsSectionDivider}
				alt="paint brush bottom"
				bgColor="lighter-primary-bg"
			/>
			<About />
			<Contact />
		</>
	);
};

export default App;
