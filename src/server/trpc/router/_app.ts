import { router } from "../trpc";
import { authRouter } from "./auth";
import { executeUrlRouter } from "./executeUrl";

export const appRouter = router({
  auth: authRouter,
  executeUrl: executeUrlRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
