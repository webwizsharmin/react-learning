export function LoginForm({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-100 to-blue-300">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
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
              required
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
              required
            />
          </div>

          <button
            type="submit"
            className=" w-full px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
          >
            Log In
          </button>

          <div className="flex justify-between items-center">
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

            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
