'use client'

import { createBlog } from "@/app/schemas/blog";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { Container } from "@/components/shared-ui/container";
import { H1 } from "@/components/shared-ui/headings";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { createBlogAction } from "@/app/actions/blog";

export interface PageProps {

}

// https://docs.convex.dev/functions/mutation-functions#calling-mutations-from-clients
export default function CreateRoute(props: PageProps) {

    const [isPending, startTransition] = useTransition();
    
    const { handleSubmit, control } = useForm({
        resolver: zodResolver(createBlog),
        defaultValues: {
            title: "Testing",
            content: "This is just dummy data",
        }
    })

    function create(data: z.infer<typeof createBlog>) {
        startTransition(async () => {
            await createBlogAction(data);
            toast.success("Blog created successfully")
        })
    }

    return (
        <Container
            id="create"
            py={'section'}
            className="gap-10 items-center"
        >
            <H1 title="Create Post" subtitle="Share your thoughts with the world"
                className="text-center" />

            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Create Blog Article</CardTitle>
                    <CardDescription>Create a new blog article</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(create)}>
                        <FieldGroup className="gap-4">
                            <Controller name="title" control={control} render={({ field, fieldState }) =>
                                <Field>
                                    <FieldLabel>Title:</FieldLabel>
                                    <Input placeholder="Enter title" {...field} aria-invalid={fieldState.invalid} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            } />

                            <Controller name="content" control={control} render={({ field, fieldState }) =>
                                <Field>
                                    <FieldLabel>Content:</FieldLabel>
                                    <Textarea placeholder="Enter content" {...field} aria-invalid={fieldState.invalid} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            } />

                            <ButtonImpl type="submit" text="Create Post" isPending={isPending}
                                pendingState={"Creating Post"} height={'md'} />
                        </FieldGroup>

                    </form>
                </CardContent>
            </Card>

        </Container>
    );
}
