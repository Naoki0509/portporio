import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ProfileImage from "src/public/IMG_5794.jpg";
import Footer from "src/components/Footer";
import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import HeaderResponsive from "src/components/Header";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Naoki Hayahsida</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HeaderResponsive
				links={[
					{
						link: "/",
						label: "Home",
					},
					{
						link: "/blog",
						label: "Blog",
					},
				]}
			/>
			<div className="flex flex-1 flex-col min-h-screen items-center justify-center">
				<div>
					<Image
						alt="ProfileImage"
						layout="intrinsic"
						src={ProfileImage}
						width={250}
						height={250}
						className="rounded-full object-cover object-top"
					/>
					<h1 className="text-4xl font-bold text-center pt-12">
						Naoki Hayashida
					</h1>
				</div>

				<div className="pt-12 flex space-x-10">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/Naoki0509"
					>
						<BsGithub className="text-6xl" />
					</a>

					<a
						href="https://twitter.com/nakki0509"
						target="_blank"
						rel="noreferrer"
					>
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
			</div>
			<Footer />
		</div>
	);
};
export default Home;
