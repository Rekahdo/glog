// https://docs.convex.dev/functions/mutation-functions

import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";
import { authComponent } from "./auth";

export const createBlog = mutation({
    args: { title: v.string(), content: v.string() },
    handler: async (ctx, args) => {
        const user = await authComponent.safeGetAuthUser(ctx)

        if (!user) throw new ConvexError("Not authenticated")

        const newBlogId = await ctx.db.insert("blogs", {
            title: args.title,
            content: args.content,
            userId: user._id
        });

        return newBlogId;
    },
});

export const getBlogs = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db
            .query('blogs')
            .order('desc')
            .collect()
    }
})