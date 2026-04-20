import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";


const SignUP = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [form, setFormData] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  console.log("form", form);

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
  
  <form className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4">
    <h3 className="pb-1.5 text-4xl text-black">Sign Up</h3>
    <input
      type="text"
      name="name"
      placeholder="Full name"
      value={form.name}
      onChange={getInputValue}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      value={form.email}
      onChange={getInputValue}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="password"
      name="password"
      placeholder="Password"
      value={form.password}
      onChange={getInputValue}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
      Sign Up
    </button>
<p>Don't have an account? 
     <nav>
        <Link to="/">Sign Up</Link>
      </nav>
     </p>
  </form>
 
</main>
  );
};

export default SignUP;
