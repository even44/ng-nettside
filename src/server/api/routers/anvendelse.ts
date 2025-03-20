import { createTRPCRouter, publicProcedure } from "../trpc";
import {readdir} from "fs"


const anvendelserPath = "/app/public/anvendelser"
export const anvendelser: Anvendelse[] = []

interface Anvendelse {
	file_name: string
}


export const anvendelseRouter = createTRPCRouter({
    getFromDir: publicProcedure.query(() => {
        readdir(anvendelserPath, null , (err, files) => {

			if (err != null){
				console.log(err);
				return null
			}
			console.log("Files" + files)
			files.map((file) => {
				if (file.includes(".pdf")) {
					const annvendelse: Anvendelse = {
						file_name: file
					}
					anvendelser.push(annvendelse)
				}
			})

			return anvendelser

		})
    }),

	list: publicProcedure.query(() => {
		return anvendelser
	})
});

