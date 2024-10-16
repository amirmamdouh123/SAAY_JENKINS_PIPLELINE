import { RegisterForm } from "@/components/auth";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">إنشاء حساب</h1>
        <RegisterForm />
        <p className="mt-4 text-center">
          لديك حساب؟{" "}
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
