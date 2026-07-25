export function LoginForm({ title }) {
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <form method="post" className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border rounded p-2"
          />
        </div>

        <button className="px-4 py-2 w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-white">
          Log In
        </button>

        <div className="flex justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>

          <button className="text-sm">Forgot Password?</button>
        </div>
      </form>
    </div>
  );
}
