import { createFileRoute } from '@tanstack/react-router';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa6';

export const Route = createFileRoute('/')({
  component: () => (
    <div className="flex h-screen *:flex-1">
      <div className="bg-[url(/images/DesktopWide-Col-1-en-US@1x.webp)] bg-right" />
      <div className="flex flex-col justify-center bg-neutral-50">
        <div className="flex flex-col gap-3 px-8 text-center">
          <h2 className="text-2xl font-semibold">
            Community-Powered Motivation
          </h2>
          <p className="">
            Track your progress and cheer each other on. Join over 100 million
            active people on DOL.E for free.
          </p>

          <p className="text-neutral-500">
            Already a member?{' '}
            <span className="">
              <button type="button" className="text-orange-600 hover:underline">
                Log In
              </button>
            </span>
          </p>
          <ul className="space-y-2 *:px-4">
            <li>
              <button
                type="button"
                className="relative w-full rounded border border-neutral-900 bg-[#F9F8F5] px-4 py-2 font-semibold tracking-wider text-zinc-800 hover:bg-neutral-800/40"
              >
                <FaFacebook className="absolute left-0 top-1/2 ml-4 inline-block -translate-y-1/2 p-1 text-3xl" />
                Sign Up With Facebook
              </button>
            </li>
            <li>
              <button
                type="button"
                className="relative w-full rounded border border-neutral-900 bg-[#F9F8F5] px-4 py-2 font-semibold tracking-wider text-zinc-800 hover:bg-neutral-800/40"
              >
                <FaGoogle className="absolute left-0 top-1/2 ml-4 inline-block -translate-y-1/2 p-1 text-3xl" />
                Sign Up with Google
              </button>
            </li>
            <li>
              <button
                type="button"
                className="relative w-full rounded border border-neutral-900 bg-[#F9F8F5] px-4 py-2 font-semibold tracking-wider text-zinc-800 hover:bg-neutral-800/40"
              >
                <FaApple className="absolute left-0 top-1/2 ml-4 inline-block -translate-y-1/2 p-1 text-3xl" />
                Sign Up with Apple
              </button>
            </li>
            <li>
              <button
                type="button"
                className="relative w-full rounded border border-orange-700 bg-orange-600 px-4 py-2 font-semibold tracking-wider text-neutral-100"
              >
                Sign Up with Email
              </button>
            </li>
          </ul>
          <p className="text-xs">
            By signing up for DOL.E, you agree to the{' '}
            <span className="text-sky-600 hover:underline">
              Terms of Service
            </span>
            . View our{' '}
            <span className="text-sky-600 hover:underline">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
      <div className="bg-[url(/images/DesktopWide-Col-3-en-US@1x.webp)] bg-left" />
    </div>
  ),
});
