const SkillCard = ({ icon, title }) => {
	return (
		<div className="skill-card p-3 text-center very-light-primary-bg">
			<div className="mb-1">
				<i className={`${icon} display-5`}></i>
			</div>
			<span className="skill-card-title">{title}</span>
		</div>
	);
};

export default SkillCard;
