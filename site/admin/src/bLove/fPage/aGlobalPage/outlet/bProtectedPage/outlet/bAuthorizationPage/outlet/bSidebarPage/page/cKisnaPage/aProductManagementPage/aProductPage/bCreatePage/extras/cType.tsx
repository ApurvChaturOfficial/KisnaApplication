import { z } from "zod";


export const formSchema = z.object({
  aTitle: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
  aSubtitle: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(500, { message: "Please enter atmost 500 characters" }),
  aDescription: z.string()
    .min(15, { message: "Please enter atlest 15 characters" })
    .max(5000, { message: "Please enter atmost 5000 characters" }),
  aDetail: z.string()
    .min(15, { message: "Please enter atlest 15 characters" })
    .max(50000, { message: "Please enter atmost 50000 characters" }),
  aStatus: z.string()
    .min(5, { message: "Please select status" })
    .max(15, { message: "Please select status" }),
  aSlug: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
  
  cCategory: z.string(),
  cTag: z.array(z.string()),
  cProductVariant: z.array(z.string()),
  // cOption: z.string(),

  dOption: z.array(z.object({
    name: z.string(),
    values: z.array(z.string()),
  })),
  dGeneratedVariant: z.array(z.object({
    name: z.string(),
    price: z.number().optional(),
    stock: z.number().optional(),
    selectedOption: z.array(
      z.object({
        name: z.string(),
        value: z.string()
      })
    )
  })),
  // dGroup: z.object({
  //   selectedOption: z.object({
  //     name: z.string(),
  //     value: z.string()
  //   }),
  //   selectedVaraint: z.array(z.object({
  //     name: z.string()
  //   }))
  // }),

});
