
const SocialLink = ({href, icon}) => {
  return (
		<li>
			<a href={href}>
				<i className={icon}></i>
			</a>
		</li>
  );
}

export default SocialLink