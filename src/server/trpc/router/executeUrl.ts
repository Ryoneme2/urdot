import { TRPCError } from '@trpc/server';
import { string, z } from "zod";

import { router, publicProcedure } from "../trpc";
import { $newUrl, $getRealPath } from "../services/urlService";

export const executeUrlRouter = router({
  newUrl: publicProcedure
    .input(z.object({ url: string().url(), author: string().nullish() }))
    .mutation(async ({ input }) => {
      console.log({ input });
      const res = await $newUrl(input.url, input.author)
      if (!res.success) throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: res.msg,
      })
      return res;
    }),
  getRealPath: publicProcedure
    .input(z.object({ url: string() }))
    .query(async ({ input }) => {
      const res = await $getRealPath(input.url)

      console.log({ res });
      if (!res.success) throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: res.msg,
      })
      if (!res.url) throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Not found',
      })
      return res.url
    })
});
