import cn from "@/lib/utils";
import { useRegisterMutation } from "@/redux/features/auth/authApiSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import RegisterSchema from "./RegisterSchema";

type TRegisterInputsProps = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [registerUser] = useRegisterMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TRegisterInputsProps>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<TRegisterInputsProps> = async (data) => {
    try {
      const { first_name, last_name, email, password } = data;
      const username = `${first_name} ${last_name}`;
      const result = await registerUser({ username, email, password });
      console.log("Registration successful:", result);
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="first_name">
          الاسم الأول
        </label>
        <input
          type="text"
          id="first_name"
          {...register("first_name", { required: "هذا الحقل مطلوب" })}
          className={cn("border p-2 w-full rounded outline-none", {
            "border-red-500": errors.first_name,
            "border-gray-300": !errors.first_name,
          })}
          placeholder="أدخل اسمك الأول"
        />
        {errors.first_name && (
          <p className="text-red-500 text-sm">{errors.first_name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="last_name">
          الاسم الأخير
        </label>
        <input
          type="text"
          id="last_name"
          {...register("last_name", { required: "هذا الحقل مطلوب" })}
          className={cn("border p-2 w-full rounded outline-none", {
            "border-red-500": errors.last_name,
            "border-gray-300": !errors.last_name,
          })}
          placeholder="أدخل اسمك الأخير"
        />
        {errors.last_name && (
          <p className="text-red-500 text-sm">{errors.last_name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "البريد الإلكتروني مطلوب",
            pattern: {
              value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
              message: "البريد الإلكتروني غير صالح",
            },
          })}
          className={cn("border p-2 w-full rounded outline-none", {
            "border-red-500": errors.email,
            "border-gray-300": !errors.email,
          })}
          placeholder="أدخل بريدك الإلكتروني"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4 relative">
        <label className="block text-gray-700 mb-2" htmlFor="password">
          كلمة المرور
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          {...register("password", {
            required: "كلمة المرور مطلوبة",
            minLength: {
              value: 6,
              message: "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل",
            },
          })}
          className={cn("border p-2 w-full rounded outline-none", {
            "border-red-500": errors.password,
            "border-gray-300": !errors.password,
          })}
          placeholder="أدخل كلمة المرور"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute left-2 top-1/2 transform translate-y-1 cursor-pointer"
        >
          {showPassword ? (
            <AiFillEye size={20} />
          ) : (
            <AiFillEyeInvisible size={20} />
          )}
        </span>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="confirm_password">
          إعادة تأكيد كلمة المرور
        </label>
        <input
          type="password"
          id="confirm_password"
          {...register("confirm_password", {
            required: "تأكيد كلمة المرور مطلوب",
            validate: (value) => {
              if (value !== watch("password")) {
                return "كلمة المرور غير متطابقة";
              }
              return true;
            },
          })}
          className={cn("border p-2 w-full rounded outline-none", {
            "border-red-500": errors.confirm_password,
            "border-gray-300": !errors.confirm_password,
          })}
          placeholder="إعادة كلمة المرور"
        />
        {errors.confirm_password && (
          <p className="text-red-500 text-sm">
            {errors.confirm_password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-myGreen-dark text-white p-2 rounded w-full hover:bg-myGreen-hover"
      >
        تسجيل
      </button>
    </form>
  );
};

export default RegisterForm;
