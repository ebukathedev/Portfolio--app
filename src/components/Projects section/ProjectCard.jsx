import Skill from "./Skill";
import IconButton from "../IconButton";

const ProjectCard = ({ img, name, description, skills, live, code }) => {
	return (
		<div className="col-md-6 ">
			<div className="project-card very-light-primary-bg p-3 text-center">
				<img className="img-fluid" src={img} alt={name} />
				<div>
					<h3 className="project-name my-3">{name}</h3>
					<p className="mb-4">{description}</p>
					<h5 className="text-center">
						<span className="skills-title">skills</span>
					</h5>
					<ul className="skills-container p-0  mb-4 d-flex justify-content-center">
						{skills.map((item, index) => (
							<Skill key={index} item={item} />
						))}
					</ul>
					<div className="btn-container">
						<IconButton href={live} name="Live Site" />
						<IconButton href={code} name="Source Code" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
