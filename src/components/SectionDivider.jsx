const SectionDivider = ({ img, alt, bgColor }) => {
	return (
		<section className={`section-divider ${bgColor}`}>
			<img className="img-fluid" src={img} alt={alt} />
		</section>
	);
};

export default SectionDivider;
