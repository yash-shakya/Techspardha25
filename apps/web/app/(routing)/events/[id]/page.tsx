export default async function SingleEvent({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = (await params).id;
	return (
        <>
            <h1>Event: {id}</h1>
        </>
    );
}
