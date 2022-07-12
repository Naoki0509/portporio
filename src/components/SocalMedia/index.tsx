import { FC } from "react";

type SocialMediaProps = [{ type: string; href: string; rel: string }];

const SocialMedia: SocialMediaProps = {
	type: "github",
	href: "https://github.com/Naoki0509",
	rel: "noreferrer",
};

const SocalMedia: FC = () => {
	return (
		<div className="pt-12 flex space-x-10">
			<a target="_blank" rel="noreferrer" href="">
				<BsGithub className="text-6xl" />
			</a>

			<a href="https://twitter.com/nakki0509" target="_blank" rel="noreferrer">
				<BsTwitter className="text-6xl" />
			</a>

			<a
				href="https://www.instagram.com/naoking0509"
				target="_blank"
				rel="noreferrer"
			>
				<BsInstagram className="text-6xl" />
			</a>
		</div>
	);
};

export default SocalMedia;
