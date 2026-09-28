'use client'

import { LoginSchema } from "@/app/schemas/auth";
import { SignUpBtn } from "@/components/block/auth-btns";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
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
                        <Button disabled={isPending} type="submit">{isPending ? (
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
