import skillsData from "../skillsData";
import SkillCard from "./SkillCard";

const SkillsContainer = () => {
	return (
		<section className="px-3 pb-5 lighter-primary-bg">
			<div className="container mb-5">
				<h2 className="section-title text-center display-6">
					<span className="underline">Skills</span>
				</h2>
				<div className="skill-cards-container d-flex justify-content-center mt-5 pb-5">
					{skillsData.map(({ icon, title }, index) => {
						return (
							<SkillCard key={index} icon={icon} title={title} />
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default SkillsContainer;
