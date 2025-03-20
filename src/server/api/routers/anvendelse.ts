import { createTRPCRouter, publicProcedure } from "../trpc";
import { promises, readFile } from "fs"

export const anvendelseRouter = createTRPCRouter({
    test: publicProcedure.query(({ctx, input}) => {
        return ""
    }),
});

