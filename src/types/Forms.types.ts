import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z
    .string({
      message: 'Email is required and must be a string',
    })
    .min(1, 'Email is required'),
});
