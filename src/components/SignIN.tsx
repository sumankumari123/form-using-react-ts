import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";


const SignIN = () => {
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
const getDataFromLocalStorage = localStorage.getItem('auth')
console.log("getDataFromLocalStorage", getDataFromLocalStorage)

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
  <form className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4">
    <h3 className="pb-1.5 text-4xl text-black">Sign In</h3>


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
      Sign In
    </button>
<p>Already have an account?
        <Link to="/sign-up">Sign Up</Link>
     </p>
  </form>
  
</main>
  );
};

export default SignIN;
