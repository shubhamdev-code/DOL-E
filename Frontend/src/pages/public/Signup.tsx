import { Link } from "react-router-dom";
import Auth from "../../components/Auth";
export default function Login() {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Create An Account</h1>
        <p className="">Enter your email to sign up for DOL-E</p>
      </div>
      <Auth />
      <div>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
