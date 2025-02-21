import { FormNumberInputProps } from "@/types/form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

export default function FormNumberInput({ control, name, label, placeholder, description }: FormNumberInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder={placeholder}
              {...field}
              value={field.value ?? ""}
              onChange={(e) => field.onChange(e.target.value)}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
