import { PasswordResetForm } from "@/components/auth";

const PasswordReset = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">إعادة تعيين كلمة المرور</h1>
        <PasswordResetForm />
      </div>
    </div>
  );
};

export default PasswordReset;
