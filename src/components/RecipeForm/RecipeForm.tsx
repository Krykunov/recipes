"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useMemo } from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormNumberInput from "./FormNumberInput";

const formSchema = z
  .object({
    query: z.string().optional(),
    cuisine: z.string().optional(),
    preparationTime: z
      .string()
      .refine((val) => val === "" || (Number(val) >= 1 && Number(val) <= 60), {
        message: "Preparation time must be between 1 and 60 minutes",
      })
      .optional(),
  })
  .refine(
    (data) => {
      return data.query || data.cuisine || (data.preparationTime && data.preparationTime !== "");
    },
    {
      message: "At least one search criteria must be specified",
      path: ["query"],
    }
  );

const cuisineOptions = [
  "Italian",
  "Mexican",
  "Chinese",
  "Indian",
  "Japanese",
  "Thai",
  "Mediterranean",
  "French",
  "Greek",
  "Spanish",
];

export function RecipeForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
      cuisine: "",
      preparationTime: "",
    },
  });

  const isNextEnabled = useMemo(
    () => Object.values(form.watch()).some((field) => field && field !== ""),
    [form.watch()]
  );
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const params = new URLSearchParams(Object.entries(values).filter(([, v]) => v));
    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormInput
            control={form.control}
            name="query"
            label="Recipe Search"
            placeholder="Enter recipe (e.g., pasta)"
            description="Search for recipes by name or ingredients"
          />

          <FormSelect
            control={form.control}
            name="cuisine"
            label="Cuisine Type"
            options={cuisineOptions}
            placeholder="Select a cuisine type"
            description="Filter recipes by cuisine type"
          />

          <FormNumberInput
            control={form.control}
            name="preparationTime"
            label="Maximum Preparation Time"
            placeholder="Enter time in minutes"
            description="Maximum time you want to spend cooking (in minutes)"
          />

          <Button type="submit" className="w-full" disabled={!isNextEnabled}>
            Next
          </Button>
        </form>
      </Form>
    </div>
  );
}
