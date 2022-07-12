import { FC } from "react";

export const Footer: FC = () => {
	return (
		<footer className="flex flex-1 items-center justify-center pt-2">
			<p className="text-center">
				© {new Date().getFullYear()} created by Naoki.
			</p>
		</footer>
	);
};
export default Footer;
