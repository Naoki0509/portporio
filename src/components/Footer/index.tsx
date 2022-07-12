import { FC } from "react";

export const Footer: FC = () => {
	return (
		<footer className="flex absolute bottom-2 justify-center items-center">
			<p className="text-center">
				© {new Date().getFullYear()} created by Naoki.
			</p>
		</footer>
	);
};
export default Footer;
