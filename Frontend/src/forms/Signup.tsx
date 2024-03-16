function Signup() {
  return (
    <div className="container max-w-screen-md">
      <form method="">
        <label>
          Email
          <input type="email" placeholder="Email" required></input>
        </label>
        <label>
          Password
          <input type="password" placeholder="Password" required></input>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
