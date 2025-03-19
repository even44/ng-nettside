
import { api, HydrateClient } from "~/trpc/server";
import NgContact from "./_components/ng-contact";
import NgDescription from "./_components/ng-description";

export default async function Home() {

	return (
		<HydrateClient>
		<main className="flex gap-6 min-h-screen flex-col items-center justify-top mb-8">
			<NgContact/>
			<NgDescription/>
		</main>
		</HydrateClient>
	);
}
