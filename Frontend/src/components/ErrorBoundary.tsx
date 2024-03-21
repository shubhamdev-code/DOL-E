import { useRouteError } from "react-router-dom";

type Error = {
  status: number;
  statusText: string;
  message: string;
};

export default function ErrorBoundary() {
  const error = useRouteError() as Error;
  console.log(error);
  return (
    <div className="h-screen bg-slate 800 flex justify-center items-center">
      <div className="text-center">
        <h1>
          <span className="text-2xl block">Oops! {error.status}</span>
          <span className="text-xl">
            Sorry, an unexpected error has occured.
          </span>
        </h1>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
