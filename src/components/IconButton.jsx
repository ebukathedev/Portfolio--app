const IconButton = ({ href, name }) => {
	return (
		<a href={href} className=" icon-btn btn btn-primary">
			{name}
		</a>
	);
};

export default IconButton;
