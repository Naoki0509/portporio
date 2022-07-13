import Image from "next/image";
import AvaterImage from "src/public/ReadyPlayerMe-Avatar (1).png";

export const MyProfile = () => {
	return (
		<div className="flex md:flex-row flex-col items-center">
			<div className="flex flex-col">
				<p>ーWho is Me?</p>
				<h1 className="md:text-8xl font-bold">Naoki Hayashida</h1>

				<h2 className="pt-6 md:text-4xl font-bold">Front End</h2>
				<h2 className="md:text-4xl font-bold">WEB Devropper</h2>
			</div>
			<div>
				<Image
					alt="ProfileImage"
					layout="intrinsic"
					src={AvaterImage}
					width={900}
					height={900}
					className=""
				/>
			</div>
		</div>
	);
};
