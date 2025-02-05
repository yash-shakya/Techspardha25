import TeamCard from "../../ui/components/TeamCard";
import SERVICES from "../../server/actions/services";

export default async function Teams() {
	const teamsD = await SERVICES.getAllTechspardhaTeams();
	if (!teamsD) return;
	const teams = Object.entries(teamsD).reverse().map(([id, team]) => ({
		id,
		...team,
	}));
	// console.log(teams); TODO: Images are not showing up because the photos has been deleted from IMGBB
	return (
		<>
			<div className="sm:w-[95%] m-auto">
				<h1 className="text-center p-4 sm:text-5xl text-4xl font-[Satoshi Variable] font-black bg-gradient-to-b from-gray-50 to-gray-50/40 text-transparent bg-clip-text max-sm:mt-5">
					Techapardha Teams
				</h1>
				<div className="flex flex-col gap-12 max-sm:mx-auto max-sm:items-center max-sm:justify-center">
					{teams.map((team, index) => (
						<div key={index} className="flex flex-col gap-4 sm:border-l-8 sm:border-stone-500 p-4 rounded-2xl">
							<h2 className="sm:text-4xl text-3xl tracking-wider font-[Satoshi Variable] w-fit">{team.id}</h2>
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
