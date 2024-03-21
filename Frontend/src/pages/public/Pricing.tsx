export default function Pricing() {
  return (
    <>
      <div className="mt-16 text-center w-4/6 mx-auto">
        <h1 className="text-4xl font-bold m-1">Make the best of your DOL-E</h1>
        <p className="m-2">
          Unlock subscription features including trackers, segment leader boards
          advanced analytics and more.
        </p>
      </div>
      <div>
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:items-stretch md:justify-center md:space-x-4 mt-8">
          <div className="relative bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-2xl font-bold">Free</h2>
            <p>For beginners</p>
            <ul className="mt-4 list-disc list-inside marker:text-blue-400">
              <li>Access to all challenges</li>
              <li>Basic analytics</li>
              <li>Leaderboard</li>
            </ul>
            <button className="mt-4 md:absolute md:inset-x-0 md:bottom-0 md:ml-4 md:mb-4 btn btn--dark">
              Get Started
            </button>
          </div>
          <div className=" bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-2xl font-bold">Pro</h2>
            <p>For professionals</p>
            <ul className="mt-4 list-disc list-inside marker:text-blue-400">
              <li>Access to all challenges</li>
              <li>Advanced analytics</li>
              <li>Leaderboard</li>
              <li>Segment leaderboards</li>
              <li>Unlimited trackers</li>
            </ul>
            <button className="btn btn--dark mt-4">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
