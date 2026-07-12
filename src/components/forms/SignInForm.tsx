"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import LogoIcon from "@/components/icons/LogoIcon";

import { Loading03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { toast } from "sonner";
import Link from "next/link";

const formSchema = z.object({
  email: z.email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

type TSignIn = z.infer<typeof formSchema>;

export default function SignInForm() {
  const form = useForm<TSignIn>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: TSignIn) => {
    const toastId = toast.loading("Signing in...");

    try {
      // eslint-disable-next-line no-console
      console.log(values);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Signed in successfully.", {
        id: toastId,
      });

      form.reset();
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong. Please try again.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 bg-background p-6 border rounded-lg">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <Link
              href="/"
              className="flex flex-col items-center gap-2 font-medium hover:text-primary transition-colors duration-300"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <LogoIcon className="size-24" />
              </div>

              <span className="sr-only">Adnan Bin Akhlas</span>
            </Link>

            <h1 className="text-xl font-bold">Welcome back, Adnan</h1>

            <FieldDescription className="text-center">
              Sign in to access your portfolio management dashboard.
            </FieldDescription>
          </div>

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>

                <Input
                  {...field}
                  id={field.name}
                  type="email"
                  placeholder="john@example.com"
                  autoComplete="email"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>

                <Input
                  {...field}
                  id={field.name}
                  type="password"
                  placeholder="********"
                  autoComplete="current-password"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full"
          >
            {form.formState.isSubmitting ? (
              <>
                <HugeiconsIcon
                  icon={Loading03Icon}
                  className="mr-2 size-5 animate-spin"
                />
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
}
