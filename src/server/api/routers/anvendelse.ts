import { createTRPCRouter, publicProcedure } from "../trpc";
import {readdir} from "fs"


const anvendelserPath = "./public/anvendelser"
export const anvendelser: Anvendelse[] = []

interface Anvendelse {
	file_name: string
}


export const anvendelseRouter = createTRPCRouter({
    getFromDir: publicProcedure.query(() => {
        readdir(anvendelserPath, null , (err, files) => {

			if (err != null){
				console.log(err);
				return anvendelser.push({
					file_name: err.message
				})
			}
			console.log("Files: " + files.toString())
			files.map((file) => {
				if (file.includes(".pdf")) {
					const anvendelse: Anvendelse = {
						file_name: file
					}
					anvendelser.push(anvendelse)
				}
			})

			return anvendelser

		})
    }),

	list: publicProcedure.query(() => {
		console.log("BOOOP")
		return anvendelser
	})
});

