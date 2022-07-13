import { SocialMediaProps } from "src/config";

export const SocalMedia = () => {
	return (
		<div>
			<ul className="flex flex-col space-y-4">
				{Object.entries(SocialMediaProps).map((service) => (
					<li key={service[0]} className="text-5xl border p-12">
						<a
							href={service[1].url}
							target="_blank"
							rel="noreferrer"
							aria-label={service[0]}
							className="block"
						>
							{service[1].icon}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
