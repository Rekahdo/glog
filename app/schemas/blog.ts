import z from "zod";

export const createBlog = z.object({
    title: z.string().min(3).max(50),
    content: z.string().min(10),
})