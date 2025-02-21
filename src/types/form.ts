import { Control, FieldValues } from "react-hook-form";

export interface FormInputProps {
  control: Control<FieldValues>;
  name: string;
  label: string;
  placeholder: string;
  description?: string;
}

export interface FormSelectProps {
  control: Control<FieldValues>;
  name: string;
  label: string;
  options: string[];
  placeholder: string;
  description?: string;
}

export interface FormNumberInputProps {
  control: Control<FieldValues>;
  name: string;
  label: string;
  placeholder: string;
  description?: string;
}
