import { string, z } from "zod";

import { router, publicProcedure } from "../trpc";
import { $newUrl } from "../services/urlService";

export const executeUrlRouter = router({
  newUrl: publicProcedure
    .input(z.object({ url: string().url(), author: string().nullish() }))
    .mutation(async ({ input }) => {
      console.log({ input });
      const res = await $newUrl(input.url, input.author)
      if (!res.success) {
        throw new Error(res.msg)
      }
      return res;
    }),
});
