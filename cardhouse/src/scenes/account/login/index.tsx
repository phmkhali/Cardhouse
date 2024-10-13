import { auth } from "@/firebaseSetup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case "auth/wrong-password":
            setErrorMessage("Incorrect password. Please try again.");
            break;
          case "auth/user-not-found":
            setErrorMessage("No account found with this email.");
            break;
          case "auth/invalid-email":
            setErrorMessage("Invalid email format.");
            break;
          case "auth/too-many-requests":
            setErrorMessage("Too many login attempts. Try again later.");
            break;
          default:
            setErrorMessage("Error logging in. Please try again.");
        }

        console.error("Error code:", errorCode, "Message:", error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md m-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Log In
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p> // Display error message here
          )}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-accent hover:text-primary-dark"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
