const WelcomeMessage = (isLoggedIn) => {
  isLoggedIn = false;
  return (
    <div>{isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Sing In.</h1>}</div>
  );
};

export default WelcomeMessage;
