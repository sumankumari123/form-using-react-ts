import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const SignUP = () => {
  const navigate = useNavigate();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();

if (!form.name.trim()) {
  alert("Name is required");
  return;
}

if (!form.email.trim()) {
  alert("Email is required");
  return;
}

if (!form.password.trim()) {
  alert("Password is required");
  return;
}

const existingData = localStorage.getItem("auth");

// Step 1: convert to array
let users = existingData ? JSON.parse(existingData) : [];

if (!Array.isArray(users)) {
  users = [users];
}

// users.push(form);
// console.log(existingData, "existingData")
// console.log(users, "users")

navigate("/home")
localStorage.setItem("auth", JSON.stringify(users));
setFormData({
    name: "",
    email: "",
    password: "",
  });

}

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4">
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

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
          Sign Up
        </button>
        <p>
          Don't have an account?
          <Link to="/">Sign In</Link>
        </p>
      </form>
    </main>
  );
};

export default SignUP;
