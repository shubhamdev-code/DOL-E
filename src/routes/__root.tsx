import { Outlet, createRootRoute } from '@tanstack/react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div className="flex min-h-screen flex-col">
          <header>
            <div className="flex items-center justify-between gap-8 px-4 py-2 shadow-lg md:px-16 md:py-4">
              <div className="flex items-center justify-between gap-10">
                <div className="flex items-center justify-center gap-4 hover:*:cursor-pointer">
                  <RxHamburgerMenu className="text-3xl md:hidden" />
                  <h1 className="text-2xl font-extrabold tracking-wider text-orange-600">
                    DOL.E
                  </h1>
                </div>
                <nav className="hidden md:block">
                  <ul className="text-semibold flex justify-evenly gap-10 hover:*:cursor-pointer">
                    <li>Features</li>
                    <li>Maps</li>
                    <li>Challenges</li>
                    <li>Subscription</li>
                  </ul>
                </nav>
              </div>
              <button
                type="button"
                className="hidden rounded border border-neutral-300 bg-neutral-100 px-6 py-2 
                    text-sm font-semibold text-neutral-900 outline-2 outline-neutral-400 md:block"
              >
                Log In
              </button>
              <button
                type="button"
                className="font-sembold rounded bg-orange-600 px-3 py-2 text-sm text-neutral-100 md:hidden"
              >
                Get The App
              </button>
            </div>
          </header>
          <main className="flex-1">
            <Outlet />
          </main>
          <footer>
            <div className="flex flex-col justify-between gap-8 bg-[#F9F8F5] p-4 md:flex-row md:p-20">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-extrabold tracking-wider text-orange-600">
                  DOL.E
                </h1>
                <div className="relative flex-auto">
                  <p className="relative text-xs md:absolute md:inset-x-0 md:bottom-0">
                    DOL.E protects your data. <br />
                    Read more in our{' '}
                    <span className="text-neutral-500 underline">
                      Privacy Policy
                    </span>
                    .
                  </p>
                </div>
                <ul
                  className="flex flex-wrap items-center justify-between gap-6 text-2xl hover:*:cursor-pointer 
                  "
                >
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareXTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                </ul>
              </div>
              <nav className="text-neutral-600">
                <ul className=" md:grid md:grid-cols-[auto_auto_auto] md:gap-x-16 md:gap-y-8 lg:flex lg:gap-16">
                  <li>
                    <ul className="hover:*:undeline *:p-1">
                      <li>Features</li>
                      <li>Subscriptions</li>
                      <li>Student Discount</li>
                      <li>About</li>
                      <li>Carrers</li>
                      <li>Press</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="hover:*:undeline *:p-1">
                      <li>Routes</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="hover:*:undeline *:p-1">
                      <li>What&apos;s New</li>
                      <li>Stories</li>
                      <li>Support</li>
                      <li>Business</li>
                      <li>Partner Center</li>
                      <li>Terms</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="hover:*:undeline *:p-1">
                      <li>Privacy</li>
                      <li>Do Not Share Personal Information</li>
                      <li>Login</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="hover:*:undeline *:p-1">
                      <li>
                        <button type="button">
                          <img
                            src="/images/app-store-en-US@1x.webp"
                            alt="Download on App Store"
                          />
                        </button>
                      </li>
                      <li>
                        <button type="button">
                          <img
                            src="/images/play-store-en-US@1x.webp"
                            alt="Get It on Play Store"
                          />
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </footer>
        </div>
        <TanStackRouterDevtools />
      </>
    );
  },
});
