import Auth from "../../components/Auth";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Log In</h1>
        <p>
          to your <i>DOL-E</i> account
        </p>
      </div>
      <Auth remember />
      <div>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
