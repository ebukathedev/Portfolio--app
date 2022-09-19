import ProjectCard from "./ProjectCard";
import projects from "../projects";

const Projects = () => {
	return (
		<section className="px-3 py-5 lighter-primary-bg">
			<div className="container overflow-hidden my-5">
				<h2
					className="section-title text-center display-6"
					id="projects"
				>
					<span className="underline">Projects</span>
				</h2>

				<div className="projects-container row mt-5 g-5 pb-5">
					{projects.map(
						(
							{ img, name, description, skills, live, code },
							index
						) => {
							return (
								<ProjectCard
									key={index}
									img={img}
									name={name}
									description={description}
									skills={skills}
									live={live}
									code={code}
								/>
							);
						}
					)}
				</div>
			</div>
		</section>
	);
};

export default Projects;
