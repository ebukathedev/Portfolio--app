const IconButton = ({ href, name, icon }) => {
	return (
		<a href={href} className=" icon-btn btn btn-primary d-flex align-items-center">
			{name}
			<i className={icon}></i>
		</a>
	);
};

export default IconButton;
