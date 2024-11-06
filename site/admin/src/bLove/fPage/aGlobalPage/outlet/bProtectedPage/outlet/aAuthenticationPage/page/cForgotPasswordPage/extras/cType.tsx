import { z } from "zod";


export const formSchema = z.object({
  eEmail: z.string(),
});
