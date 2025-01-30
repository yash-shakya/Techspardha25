import TeamCard from "../../ui/components/TeamCard";
import { TEAMS } from "../../constants/teampage";

export default function Teams() {
	// store TEAMS in a const var devs in reverse order
	// Make an array of all teams
	const teamNames = Object.keys(TEAMS);
	const teamArray = Object.values(TEAMS);
	const teams = teamArray.map((team, index) => ({
		...team,
		id: teamNames[index],
	}));

	return (
		<>
			<div className="w-[85%] m-auto">
				<h1 className="text-center p-4 sm:text-5xl text-4xl font-[Satoshi Variable] font-black bg-gradient-to-b from-gray-50 to-gray-50/40 text-transparent bg-clip-text max-sm:mt-5">
					Techapardha Teams
				</h1>
				<div className="flex flex-col gap-12 p-4">
					{teams.map((team, index) => (
						<div key={index} className="flex flex-col gap-4 sm:border-l-8 sm:border-stone-500 sm:p-4 p-2 rounded-2xl">
							<h2 className="sm:text-4xl text-3xl tracking-wider font-mono">{team.id}</h2>
							<div className="flex flex-wrap gap-4">
								{team.contacts.map((contact, index) => (
									<TeamCard key={index} contact={contact} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
