"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleKeyPress } from "@/helpers/handleKeyPress";
import { Loading03Icon, SentIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { toast } from "sonner";
import { sendContactEmail } from "@/actions/contact";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.email("Enter a valid email address."),
  phone: z
    .string()
    .min(10, "Phone number is required.")
    .regex(
      /^\+?[0-9\s\-().]{10,20}$/,
      "Enter a valid international phone number.",
    ),
  subject: z.string().min(3, "Subject is required."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

export type TContact = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<TContact>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: TContact) => {
    const toastId = toast.loading("Sending your message…");
    const result = await sendContactEmail(values);

    if (!result.success) {
      console.error(values);
      toast.error(result.message, { id: toastId });
    }

    form.reset();
    toast.success(result.message, { id: toastId });
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      onKeyDown={(e) => handleKeyPress(e, "Enter", form.handleSubmit(onSubmit))}
      className="flex h-full flex-col justify-center gap-4"
    >
      <FieldGroup>
        {/* Name */}
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                autoFocus
                className="h-12"
                placeholder="John Doe"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                className="h-12"
                placeholder="john@example.com"
                type="email"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
              <Input
                {...field}
                id={field.name}
                className="h-12"
                placeholder="+1 555 123 4567"
                type="tel"
                inputMode="tel"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Subject */}
        <Controller
          name="subject"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Subject</FieldLabel>
              <Input
                {...field}
                id={field.name}
                className="h-12"
                placeholder="How can I help you?"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Message */}
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Message</FieldLabel>
              <Textarea
                {...field}
                id={field.name}
                placeholder="Tell me about your project..."
                className="min-h-45 resize-none"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="h-12 w-full font-medium transition-all duration-300 disabled:cursor-progress"
        >
          {form.formState.isSubmitting ? (
            <>
              <HugeiconsIcon
                icon={Loading03Icon}
                className="mr-2 h-5! w-5! animate-spin"
              />
              Sending…
            </>
          ) : (
            <>
              <HugeiconsIcon icon={SentIcon} className="mr-2 h-5! w-5!" />
              Send Message
            </>
          )}
        </Button>
      </FieldGroup>
    </form>
  );
}
