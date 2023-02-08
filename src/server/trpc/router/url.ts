import { TRPCError } from '@trpc/server';
import { string, z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";
import { $getUrls } from "../services/urlService";

export const urlRouter = router({
  getAllUrls: protectedProcedure.query(async ({ ctx }) => {
    const res = await $getUrls(ctx.session.user.id)
    return res
  })
});
