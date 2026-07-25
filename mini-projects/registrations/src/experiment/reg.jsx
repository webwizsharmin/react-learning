export function RegistrationForm({ title, description }) {
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p className="text-sm mb-4">{description}</p>
      <form method="post" className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 ">
          <div className="flex flex-col flex-1">
            <label htmlFor="fname" className="font-medium">
              First Name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="John"
              className="border rounded p-2"
              required
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="lname" className="font-medium">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              className="border rounded p-2"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded p-2"
            placeholder="example@mail.com"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 ">
          <div className="flex flex-col flex-1">
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
          <div className="flex flex-col flex-1">
            <label htmlFor="cpassword" className="font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              className="border rounded p-2"
              required
            />
          </div>
        </div>

        <div className="flex items-center ">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            className="mr-2"
            required
          />
          <label htmlFor="terms" className="text-sm">
            I agree to terms of use and privacy policy
          </label>
        </div>

        <button
          type="submit"
          className=" w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
        >
          Sign Up
        </button>

        <div className="flex items-center my-2">
          <div className=" grow border-t border-gray-300 "></div>
          <span className="px-4 text-gray-500">OR</span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto ">
          <button className="flex items-center justify-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-50 transition">
            <img src="./google.png" alt="Google logo" className="h-5 w-5" />
            <span className="text-sm font-medium">Sign up with Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-50 transition">
            <img src="./facebook.png" alt="Facebook logo" className="h-5 w-5" />
            <span className="text-sm font-medium">Sign up with Facebook</span>
          </button>
        </div>
      </form>
    </div>
  );
}
