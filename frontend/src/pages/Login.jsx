import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create an account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "log in"} to book an
          appointment
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded p-2 mt-1 w-full"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded p-2 mt-1 w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded p-2 mt-1 w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          className="bg-primary text-white rounded-md text-base py-2 w-full"
          type="submit"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p className="mt-4">
            Already have an account?{" "}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={() => setState("Login")}
            >
              Log in here
            </span>
          </p>
        ) : (
          <p className="mt-4">
            Don't have an account?{" "}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign up here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
