import { createTRPCRouter, publicProcedure } from "../trpc";


export const anvendelseRouter = createTRPCRouter({
    test: publicProcedure.query(({}) => {
        return
    }),
});

