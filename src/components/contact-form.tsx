"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const formSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log(values);
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form", {
        description: "Please try again or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 sm:space-y-6 md:space-y-8 
                  w-full 
                  px-4 sm:px-5 
                  py-6 sm:py-8 md:py-10 
                  max-w-3xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] sm:text-[15px] font-medium text-gray-200">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Godfred Entsie"
                    className="h-10 sm:h-11 text-[14px] sm:text-[15px] bg-card-background border-border-color focus:border-primary-color/50 focus:ring-1 focus:ring-primary-color/30"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[12px] sm:text-[13px]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] sm:text-[15px] font-medium text-gray-200">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@domain.com"
                    type="email"
                    className="h-10 sm:h-11 text-[14px] sm:text-[15px] bg-card-background border-border-color focus:border-primary-color/50 focus:ring-1 focus:ring-primary-color/30"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[12px] sm:text-[13px]" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[14px] sm:text-[15px] font-medium text-gray-200">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Subject"
                  className="h-10 sm:h-11 text-[14px] sm:text-[15px] bg-card-background border-border-color focus:border-primary-color/50 focus:ring-1 focus:ring-primary-color/30"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[12px] sm:text-[13px]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[14px] sm:text-[15px] font-medium text-gray-200">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[120px] sm:min-h-[150px] text-[14px] sm:text-[15px] resize-none bg-card-background border-border-color focus:border-primary-color/50 focus:ring-1 focus:ring-primary-color/30"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[12px] sm:text-[13px]" />
            </FormItem>
          )}
        />

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto min-w-[150px] h-10 sm:h-11 
                      bg-primary-color hover:bg-primary-color/90 
                      text-[14px] sm:text-[15px] font-medium 
                      transition-all duration-300
                      flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
