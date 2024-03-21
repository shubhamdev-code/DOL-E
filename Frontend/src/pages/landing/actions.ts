import { json, redirect } from "react-router-dom";

export function loginAction() {
  return json({ message: "Hello World" }, { status: 200, statusText: "OK" });
}

export async function signupAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  const result = await fetch("http://localhost:3000/register", {
    method: "POST",
    body: JSON.stringify(updates),
    headers: { "Content-Type": "application/json" },
  });

  if (result.ok) {
    return redirect("/login");
  }

  return json({ message: "Error" }, { status: 400, statusText: "Bad Request" });
}
