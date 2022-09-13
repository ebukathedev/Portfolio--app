import Skill from "./Skill";
import IconButton from "../IconButton";

const ProjectCard = ({ img, name, description, skills, live, code }) => {
	return (
		<div className="col-md-6 ">
			<div className="project-card light-primary-bg p-3">
				<img className="img-fluid" src={img} alt={name} />
				<div className="px-3">
					<h4 className="project-name my-3 text-center">
						<span>{name}</span>
					</h4>
					<p>{description}</p>
					<h6 className="text-center">
						<span>Skills</span>
					</h6>
					<ul className="p-0 d-flex justify-content-center">
						{skills.map((item) => (
							<Skill item={item} />
						))}
					</ul>
					<div className="btn-container">
						<IconButton
							href={live}
							name="Live"
							icon="bi bi-file-earmark-fill"
						/>
						<IconButton
							href={code}
							name="Code"
							icon="bi bi-file-earmark-fill"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
