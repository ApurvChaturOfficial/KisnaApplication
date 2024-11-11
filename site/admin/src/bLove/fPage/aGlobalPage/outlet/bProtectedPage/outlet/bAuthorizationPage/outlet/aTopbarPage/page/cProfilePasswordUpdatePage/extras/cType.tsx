import { z } from "zod";


export const formSchema = z.object({
  eOldPassword: z.string(),
  eNewPassword: z.string(),
  eConfirmPassword: z.string(),
});
