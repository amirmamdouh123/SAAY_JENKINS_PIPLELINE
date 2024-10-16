import { LoginForm } from "@/components/auth";
import loginImg from "@assets/login.png";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between gap-8 p-4">
          <div className="w-full lg:w-1/2">
            <LoginForm />
          </div>
          <div className="hidden lg:block w-1/2">
            <img src={loginImg} alt="register" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
