
import { HydrateClient } from "~/trpc/server";
import NgContact from "./_components/ng-contact";
import NgDescription from "./_components/ng-description";
import { createCaller } from "~/server/api/root";



export default async function Home() {
	const caller = createCaller({headers: new Headers()})

	await caller.anvendelser.getFromDir()

	const res = await caller.anvendelser.list()
	console.log(res)


	//const test = await caller.anvendelser.test()
	return (
		<HydrateClient>
		<main className="flex gap-6 min-h-screen flex-col items-center justify-top mb-8">
			<NgContact/>
			<NgDescription/>
			{res.map((a) => {
				return a.file_name
			})}
			
		</main>
		</HydrateClient>
	);
}
