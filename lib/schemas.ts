import { z } from 'zod'
export const FormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
    .max(100, { message: 'El nombre no debe exceder los 100 caracteres.' }),
  email: z.email({ message: 'Por favor, ingresa un email válido.' }),
  phone: z
    .string()
    .optional()
    .transform((val) => (val ? val.replace(/[^0-9]/g, '') : ''))
    .refine(
      (val) => val.length === 0 || (val.length >= 8 && val.length <= 15),
      {
        message: 'El teléfono debe tener entre 8 y 15 dígitos.',
      }
    ),
  sede: z.string().min(1, { message: 'Por favor, selecciona una sede.' }),
  honeypot: z.string().optional(),
})

export type FormSchemaType = z.input<typeof FormSchema>
