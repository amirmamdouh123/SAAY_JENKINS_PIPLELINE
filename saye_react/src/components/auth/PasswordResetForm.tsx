import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie to access cookies
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;

type TResetPassword = {
  newPassword: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<TResetPassword>();

  const onSubmit: SubmitHandler<TResetPassword> = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      setError("confirmPassword", { message: "كلمات المرور غير متطابقة" });
      return;
    }

    try {
      const token = Cookies.get("token");

      const response = await axios.post(
        `${baseUrl}/reset-password`,
        { password: data.newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Password reset successful:", response.data);
      navigate("/auth/login");
    } catch (err) {
      console.error("Password reset failed:", err);
      if (axios.isAxiosError(err) && err.response) {
        setError("newPassword", {
          message: "حدث خطأ أثناء إعادة تعيين كلمة المرور",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="newPassword">
          كلمة المرور الجديدة
        </label>
        <input
          type="password"
          id="newPassword"
          {...register("newPassword", {
            required: "كلمة المرور الجديدة مطلوبة",
          })}
          className="w-full p-2 border border-gray-300 rounded mb-3 outline-none"
        />
        {errors.newPassword && (
          <p className="text-red-500 text-sm">{errors.newPassword?.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
          تأكيد كلمة المرور
        </label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: "تأكيد كلمة المرور مطلوب",
          })}
          className="w-full p-2 border border-gray-300 rounded mb-3 outline-none"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-myGreen-dark text-white rounded p-2 hover:bg-myGreen-hover transition-colors"
      >
        إرسال
      </button>
      <Link to="/auth/login" className="hover:underline block mt-3">
        العودة إلى تسجيل الدخول
      </Link>
    </form>
  );
};

export default ResetPassword;
