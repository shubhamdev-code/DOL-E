import { Outlet, Link, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="py-4 flex flex-col space-y-2 items-center justify-center md:flex-row md:space-y-0 md:justify-between md:px-16">
        <h1 className="font-semibold font-4xl">
          <Link to="/">DOL-E</Link>
        </h1>
        <nav>
          <ul className="flex flex-col items-center space-y-3 md:flex-row md:space-y-0 md:space-x-4 md:justify-end">
            <li>
              <NavLink to="challenges">Challenges</NavLink>
            </li>
            <li>
              <NavLink to="pricing">Pricing</NavLink>
            </li>

            <li>
              <NavLink to="login" className="btn btn--dark">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="btn btn--dark">
                Signup
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer className="my-8 columns-4 divide-x-2">
        <section className="p-2">
          <h2 className="text-2xl font-semibold">DOL-E</h2>
          <p>DOL-E protects your privacy</p>
          <ul>
            <li></li>
          </ul>
        </section>
        <section className="p-2">
          <h2 className="text-lg font-semibold">Company</h2>
          <ul>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </section>
        <section className="p-2">
          <h2 className="text-lg font-semibold">Plans</h2>
          <ul>
            <li>
              <Link to="about">For individuals</Link>
            </li>
            <li>
              <Link to="contact">For Students</Link>
            </li>
            <li>
              <Link to="contact">For Teams</Link>
            </li>
            <li>
              <Link to="contact"></Link>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}
