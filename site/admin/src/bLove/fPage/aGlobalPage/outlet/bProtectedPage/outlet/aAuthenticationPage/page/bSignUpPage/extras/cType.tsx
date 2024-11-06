import { z } from "zod";


export const formSchema = z.object({
  eFirstname: z.string()
    .min(5, { message: "Please enter atlest 5 characters" })
    .max(15, { message: "Please enter atmost 15 characters" }),
  eLastname: z.string()
    .min(5, { message: "Please enter atlest 5 characters" })
    .max(15, { message: "Please enter atmost 15 characters" }),
  eEmail: z.string(),
  eMobile: z.string(),
  ePassword: z.string()
    .min(5, { message: "Please enter atlest 8 characters" })
    .max(15, { message: "Please enter atmost 15 characters" }),
  eConfirmPassword: z.string()
    .min(5, { message: "Please enter atlest 8 characters" })
    .max(15, { message: "Please enter atmost 15 characters" }),
}).refine((data) => data.ePassword === data.eConfirmPassword, {
  message: "Please match passwords...",
  path: ["eConfirmPassword"],
});
