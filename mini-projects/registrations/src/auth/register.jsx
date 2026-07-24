export function Register({ title, description }) {
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p className="text-sm mb-4">{description}</p>
      <form method="post" className="space-y-4">
        <div className="flex gap-4 ">
          <div className="flex flex-col">
            <label htmlFor="fname" className="font-medium">
              First Name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="border rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lname" className="font-medium">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              className="border rounded p-2"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded  p-2"
          />
        </div>

        <div className="flex gap-4 ">
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
          <div className="flex flex-col">
            <label htmlFor="cpassword" className="font-medium">
              confirm password
            </label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              className="border rounded p-2"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input type="checkbox" name="terms" id="terms" className="mr-2" />
          <label htmlFor="terms">
            I agree to the terms of use privacy policy
          </label>
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-bule-600 w-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
