import { z } from "zod";

const signUpInput = z.object({
  username: z.string(),
  password: z.string(),
});

export type SignUpParamsJasjyot = z.infer<typeof signUpInput>;
