import Header from "./Header";
import Navbar from "./Navbar";
import SectionDivider from "./SectionDivider";
import heroSectionDivider from "../images/paint-drip-top.svg";
import ProjectsContainer from "./Projects/ProjectsContainer"
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
		</>
	);
};

export default App;
