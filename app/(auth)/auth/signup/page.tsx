'use client'

import { SignUpSchema } from "@/app/schemas/auth";
import { LoginBtn } from "@/components/block/auth-btns";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { ErrorType } from "../layout";
import { H2 } from "@/components/block/headings";
import { useTransition } from "react";
import { Loader, Loader2 } from "lucide-react";

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
                <CardTitle><H2 title="Sign Up" /></CardTitle>
                <CardDescription>Create an account to get started</CardDescription>
                <CardAction>
                    <LoginBtn variant={'ghost'} />
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

                        <Button type="submit">{isPending ? (
                            <>
                                <Loader className="size-4 animate-spin" />
                                <span>Loading...</span>
                            </>
                        ) : "Login"}</Button>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    );
}
