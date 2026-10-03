'use client'

import { LoginSchema } from "@/app/schemas/auth";
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
import { ErrorType } from "@/lib/types";
import { H2 } from "@/components/shared-ui/headings";
import { ButtonImpl, SignUpBtn } from "@/components/shared-ui/button-impl";

interface PageProps {
}

export default function Login(props: PageProps) {

    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    function login(data: z.infer<typeof LoginSchema>) {
        startTransition(async () => {
            await authClient.signIn.email({
                email: data.email,
                password: data.password,
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Logged in successfully");
                        router.push("/")
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
                <CardTitle><H2 title="Login" /></CardTitle>
                <CardDescription>Enter your email and password to login to your account</CardDescription>
                <CardAction>
                    <SignUpBtn variant={'ghost'} />
                </CardAction>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(login)}>
                    <FieldGroup>
                        <Controller
                            name="email" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input aria-invalid={fieldState.invalid} placeholder="okaforrichard76@gmail.com" {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="password" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Password</FieldLabel>
                                    <Input aria-invalid={fieldState.invalid} placeholder="************" {...field} type="password" />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />
                        <ButtonImpl isPending={isPending} type="submit" text="Login" />
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    );
}
