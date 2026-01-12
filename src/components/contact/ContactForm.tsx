"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setIsSuccess(true);
            reset();
        } catch (err) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-serif text-primary mb-2">Thank you!</h3>
                <p className="text-muted-foreground mb-6">
                    Your message has been sent successfully. We will get back to you shortly.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                    Send another message
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-primary/80 ml-1">
                    Your Name
                </label>
                <Input
                    placeholder="John Doe"
                    {...register("name")}
                    className={`h-14 bg-surface-dim/30 border-primary/10 transition-all duration-300 focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/5 text-lg ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && (
                    <p className="text-sm text-red-500 ml-1 mt-1 font-medium">{errors.name.message}</p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <label className="text-xs font-semibold uppercase tracking-widest text-primary/80 ml-1">
                        Email Address
                    </label>
                    <Input
                        placeholder="john@example.com"
                        type="email"
                        {...register("email")}
                        className={`h-14 bg-surface-dim/30 border-primary/10 transition-all duration-300 focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/5 text-lg ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500 ml-1 mt-1 font-medium">{errors.email.message}</p>
                    )}
                </div>
                <div className="space-y-3">
                    <label className="text-xs font-semibold uppercase tracking-widest text-primary/80 ml-1">
                        Phone Number
                    </label>
                    <Input
                        placeholder="+91 90000 00000"
                        type="tel"
                        {...register("phone")}
                        className={`h-14 bg-surface-dim/30 border-primary/10 transition-all duration-300 focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/5 text-lg ${errors.phone ? "border-red-500" : ""}`}
                    />
                    {errors.phone && (
                        <p className="text-sm text-red-500 ml-1 mt-1 font-medium">{errors.phone.message}</p>
                    )}
                </div>
            </div>

            <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-primary/80 ml-1">
                    Your Message
                </label>
                <Textarea
                    placeholder="Tell us about your requirements..."
                    rows={6}
                    {...register("message")}
                    className={`resize-none bg-surface-dim/30 border-primary/10 transition-all duration-300 focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/5 text-lg p-4 ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && (
                    <p className="text-sm text-red-500 ml-1 mt-1 font-medium">{errors.message.message}</p>
                )}
            </div>

            {error && (
                <div className="p-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg font-medium">
                    {error}
                </div>
            )}

            <Button
                type="submit"
                size="lg"
                className="w-full h-16 text-lg bg-accent hover:bg-accent/90 text-primary font-bold tracking-wider shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 mt-4"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending Message...
                    </>
                ) : (
                    "Send Message"
                )}
            </Button>
        </form>
    );
}
