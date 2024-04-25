import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const usersRouter = createTRPCRouter({
  test: publicProcedure.query(() => {
    return "test";
  }),
});
