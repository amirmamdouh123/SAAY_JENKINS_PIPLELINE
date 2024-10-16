import { z } from "zod";

const RegisterSchema = z
  .object({
    first_name: z.string().min(1, "هذا الحقل مطلوب"),
    last_name: z.string().min(1, "هذا الحقل مطلوب"),
    email: z
      .string()
      .email("البريد الإلكتروني غير صالح")
      .min(1, "البريد الإلكتروني مطلوب"),
    password: z
      .string()
      .min(6, "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل")
      .min(1, "كلمة المرور مطلوبة"),
    confirm_password: z.string().min(1, "تأكيد كلمة المرور مطلوب"),
  })
  .superRefine((data, context) => {
    if (data.confirm_password !== data.password) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "كلمة المرور غير متطابقة",
      });
    }
  });

export default RegisterSchema;
