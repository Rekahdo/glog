import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { Container } from "@/components/shared-ui/container";
import { H1, HeaderVariants } from "@/components/shared-ui/headings";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { cn } from "cn";
import { fetchQuery } from "convex/nextjs";
import Image from "next/image";
import Link from "next/link";
import { resolve } from "path";
import { Suspense } from "react";

interface PageProps {
}

// https://nextjs.org/docs/app/getting-started/images
// https://nextjs.org/docs/app/guides/streaming
// https://react.dev/reference/react/Suspense

export default function BlogPage(props: PageProps) {

    return (
        <Container id="our blogs" className="text-center" py={'section'} background={'background'}>
            <H1 title={"blogs"} subtitle="Insight, thoughts, and trends from our team."
                className="justify-center" />

            <Suspense fallback={<BlogSkeleton />}>
                <LoadBlogs />
            </Suspense>
        </Container>
    );
}

function BlogSkeleton(){
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-48 w-full rounded-xl" />
                    <div className="space-y-2 flex flex-col">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>
                </div>
            ))}
        </div>
    )
}

async function LoadBlogs() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const data = await fetchQuery(api.blog.getBlogs);

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((blog, i) => (
                <Card key={blog._id} className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                        <Image src={"https://images.unsplash.com/photo-1788217158679-5f7a52049ecc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            alt="image" fill className="object-cover" />
                    </div>

                    <CardContent className="text-start">
                        <Link href={`/blogs/${blog._id}`} className={cn("hover:text-primary", HeaderVariants({ size: 'h5' }))}>
                            {blog.title}
                        </Link>
                        <p className="text-muted-foreground line-clamp-3">{blog.content}</p>
                    </CardContent>

                    <CardFooter className="grid">
                        <Link href={`/blogs/${blog._id}`} className={cn(buttonVariants({ size: 'lg' }), "hover:text-primary")}>
                            Read More
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}