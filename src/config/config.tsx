import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import {
	SiNextdotjs,
	SiReact,
	SiTypescript,
	SiJavascript,
} from "react-icons/si";

export const SocialMedia = {
	github: {
		url: "https://github.com/Naoki0509",
		icon: <BsGithub />,
	},
	instagram: {
		url: "https://www.instagram.com/naoking0509https://www.instagram.com/naoking0509",
		icon: <BsInstagram />,
	},
	twitter: {
		url: "https://twitter.com/nakki0509",
		icon: <BsTwitter />,
	},
};

export const DevropLanguage = {
	ts: {
		name: "TypeScript",
		url: "https://www.typescriptlang.org/",
		icon: <SiTypescript />,
	},
	js: {
		name: "JavaScript",
		url: "https://javascript.info/",
		icon: <SiJavascript />,
	},
	react: {
		name: "React",
		url: "https://reactjs.org/",
		icon: <SiReact />,
	},
	next: {
		name: "Next.js",
		url: "https://nextjs.org/",
		icon: <SiNextdotjs />,
	},
};
