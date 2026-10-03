'use client'

import { SignUpSchema } from "@/app/schemas/auth";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { useTransition } from "react";
import { H2 } from "@/components/shared-ui/headings";
import { ButtonImpl, LoginBtn } from "@/components/shared-ui/button-impl";
import { ErrorType } from "@/lib/types";

interface PageProps {
}

export default function Page(props: PageProps) {


    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    function onSubmit(data: z.infer<typeof SignUpSchema>) {
        startTransition(async () => {
            await authClient.signUp.email({
                name: data.name,
                email: data.email,
                password: data.password,
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Account created successfully");
                        router.push("/auth/login")
                    },
                    onError: (error: ErrorType) => {
                        toast.error(error.error.message);
                    },
                }
            })
        })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle><H2 title="Sign Up"/></CardTitle>
                <CardDescription>Create an account to get started</CardDescription>
                <CardAction>
                    <LoginBtn variant={'ghost'} showIcon={false} />
                </CardAction>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup className="gap-4">
                        <Controller
                            name="name" control={form.control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Full Name</FieldLabel>
                                    <Input aria-invalid={fieldState.invalid} placeholder="Joe Doe" {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="email" control={form.control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input aria-invalid={fieldState.invalid} placeholder="okaforrichard76@gmail.com" {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="password" control={form.control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Password</FieldLabel>
                                    <Input aria-invalid={fieldState.invalid} placeholder="********" {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <ButtonImpl type="submit" isPending={isPending} text="Login" />
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    );
}
