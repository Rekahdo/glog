// Server Function to perform actions on the server side 
// https://nextjs.org/docs/app/getting-started/mutating-data
// https://nextjs.org/docs/app/guides/forms

// server rendering
// https://docs.convex.dev/client/nextjs/app-router/server-rendering

// redirect
// https://nextjs.org/docs/app/api-reference/functions/redirect

'use server'

import z from "zod";
import { createBlog } from "../schemas/blog";
import { fetchMutation, fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { redirect, RedirectType } from 'next/navigation'
import { getToken } from "@/lib/auth-server";

export async function createBlogAction(data: z.infer<typeof createBlog>) {
    const parsed = createBlog.safeParse(data);

    if (!parsed.success)
        throw new Error("Something went wrong :(")

    const token = await getToken();
    console.log(token)

    await fetchMutation(
        api.blog.createBlog,
        {
            title: parsed.data.title,
            content: parsed.data.content,
        },
        { token }
    );

    redirect('/blogs', RedirectType.push)
}