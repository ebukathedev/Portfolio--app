import Header from "./Header";
import Navbar from "./Navbar";
import SectionDivider from "./SectionDivider";
import heroSectionDivider from "../images/paint-drip-top.svg";
import projectSectionDivider from "../images/paint-drip-bottom.svg";
import ProjectsContainer from "./Projects/ProjectsContainer";
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
			<SectionDivider
				img={projectSectionDivider}
				alt="paint dripping down"
				bgColor="lighter-primary-bg"
			/>
		</>
	);
};

export default App;
