import { useSendResetEmailMutation } from "@/redux/features/auth/authApiSlice"; // Ensure this API slice has a mutation for sending reset email
import { SubmitHandler, useForm } from "react-hook-form";

type TResetEmail = {
  email: string;
};

const PasswordResetForm = () => {
  const [sendResetEmail] = useSendResetEmailMutation(); // Assuming this mutation exists in your API slice
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TResetEmail>();

  const onSubmit: SubmitHandler<TResetEmail> = async (data) => {
    try {
      const result = await sendResetEmail(data);
      console.log("Reset email sent:", result);
    } catch (err) {
      console.error("Failed to send reset email:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <button
        type="submit"
        className="w-full bg-myGreen-dark text-white rounded p-2 hover:bg-myGreen-hover transition-colors"
      >
        إرسال البريد
      </button>
    </form>
  );
};

export default PasswordResetForm;
