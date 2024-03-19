import { useState } from "react";

export default function Signup() {
  const [pressed, setPressed] = useState(false);
  
  return (
    <>
      <div className="relative top-0 left-0 flex justify-center items-center max-h-screen md:h-screen font-inter text-center">
        <div className="flex flex-col justify-center max-w-full md:max-w-[60%] lg:max-w-[60%] p-4 m-4">
          <section>
            <h1 className="text-2xl font-semibold">Create an account</h1>
            <p>Enter your email to signup for this</p>
          </section>
          <section>
            <form
              action="#"
              method="post"
              className="flex flex-col space-y-3 mt-4"
            >
              <input
                type="email"
                placeholder="example@example.com"
                name="email"
                className="p-1 m-0 rounded-md border-black shadow-md"
              />
              {pressed && <input
                type="password"
                placeholder="Password"
                name="pwd"
                className="p-1 m-0 rounded-md border-black shadow-md"
              />}
              <button
                type="button"
                className="btn-dark text-base"
                onClick={() => setPressed(true)}
              >
                {pressed ? "Sign Up" : "Continue"}
              </button>
              <div className="flex flex-row justify-center items-center">
                <div className="border border-cxgrey w-1/3"></div>
                <p className="text-ctgrey text-center mx-1 w-1/2">
                  or continue with
                </p>
                <div className="border border-cxgrey w-1/3"></div>
              </div>
              <div className="flex flex-row bg-cgrey rounded-md p-1 mt-4 justify-center gap-2">
                <img src="./Google.svg" alt="Google" />
                <button type="submit" className="text-black">
                  Google
                </button>
              </div>
            </form>
          </section>
          <section>
            <p className="text-center text-ctgrey mt-4">
              By clicking continue, you agree to our 
              <span className="text-black ml-1">Terms of Service</span> and
              <span className="text-black ml-1">Privacy Policy </span>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
