import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { executeUrlRouter } from "./executeUrl";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  executeUrl: executeUrlRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
