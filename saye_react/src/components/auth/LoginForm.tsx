import { useLoginMutation } from "@/redux/features/auth/authApiSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type TLoginCredentials = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [loginUser] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginCredentials>();

  const onSubmit: SubmitHandler<{ email: string; password: string }> = async (
    data
  ) => {
    try {
      const result = await loginUser(data);
      console.log("Login successful:", result);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold text-myGreen-dark mb-5">مرحبا !</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">
          البريد الالكتروني
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "البريد الالكتروني مطلوب" })}
          className="w-full p-2 border border-gray-300 rounded mb-3 outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        )}
      </div>
      <div className="mb-4 relative">
        <label className="block text-gray-700 mb-2" htmlFor="password">
          كلمة المرور
        </label>
        <input
          type="password"
          id="password"
          {...register("password", { required: "كلمة المرور مطلوبة" })}
          className="w-full p-2 border border-gray-300 rounded mb-3 outline-none"
        />

        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        )}
      </div>
      <Link to="/auth/reset-password" className="hover:underline block mb-3">
        هل نسيت كلمة المرور..؟
      </Link>
      <Link to="/auth/register" className="hover:underline block mb-5">
        مشترك جديد؟
      </Link>
      <button
        type="submit"
        className="w-full bg-myGreen-dark text-white rounded p-2 hover:bg-myGreen-hover transition-colors"
      >
        دخول
      </button>
    </form>
  );
};

export default LoginForm;
