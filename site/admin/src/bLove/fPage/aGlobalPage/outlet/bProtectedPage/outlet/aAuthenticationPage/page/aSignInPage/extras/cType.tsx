import { z } from "zod";


export const formSchema = z.object({
  eEmail: z.string()
    .min(10, { message: "Please enter atlest 10 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
  ePassword: z.string()
    .min(8, { message: "Please enter atlest 8 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
});
