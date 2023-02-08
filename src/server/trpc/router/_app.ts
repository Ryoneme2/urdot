import { router } from "../trpc";
import { authRouter } from "./auth";
import { executeUrlRouter } from "./executeUrl";
import { urlRouter } from "./url";

export const appRouter = router({
  auth: authRouter,
  executeUrl: executeUrlRouter,
  URL: urlRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
