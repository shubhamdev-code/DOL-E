import { Form, useNavigation } from "react-router-dom";
import GoogleLogo from "./GoogleLogo";

export default function Auth({ remember = false }: { remember?: boolean }) {
  const { state } = useNavigation();
  return (
    <Form
      method="POST"
      className="flex flex-col space-y-4 justify-center w-3/4 max-w-lg"
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="px-2 py-1 border-2 border-gray-300 rounded-md"
      />

      <input
        type="password"
        name="pwd"
        placeholder="Password"
        required
        className="px-2 py-1 border-2 border-gray-300 rounded-md"
      />

      <label className={`${!remember ? "hidden" : ""}`}>
        <input
          type="checkbox"
          name="remember"
          defaultChecked
          className="mr-2"
        />
        Remeber Me
      </label>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn btn--dark btn--animated"
      >
        {remember ? "Log In" : "Sign Up"}
      </button>

      <div className="flex items-center w-3/4 mx-auto">
        <div className="border border-gray-400 bg-gray-700 w-1/3"></div>
        <span className="mx-1 min-w-32 text-gray-500">or continue with</span>
        <div className="border border-gray-400 w-1/3"></div>
      </div>

      <div className="btn btn--light btn--animated flex justify-center space-x-2">
        <GoogleLogo />
        <button type="submit" className="text-black">
          Google
        </button>
      </div>
    </Form>
  );
}
