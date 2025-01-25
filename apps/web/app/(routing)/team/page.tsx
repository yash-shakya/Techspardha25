import TeamCard from "../../ui/components/TeamCard";
import SERVICES from "../../server/actions/services";

export default async function Teams() {
	const teamsD = await SERVICES.getAllTechspardhaTeams();
	if (!teamsD) return;
	const teams = Object.entries(teamsD).map(([id, team]) => ({
		id,
		...team,
	}));
	// console.log(teams);
	return (
		<>
			<div className="w-[85%] m-auto">
				<h1 className="p-4 sm:text-5xl text-4xl font-[Satoshi Variable] font-black bg-gradient-to-b from-gray-50 to-gray-50/40 text-transparent bg-clip-text">
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
