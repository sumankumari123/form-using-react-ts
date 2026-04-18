import React, { useState } from "react";

const Form = () => {
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
    <main className="h-[30rem] mx-auto">
      <form className="">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={getInputValue}
          className=""
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={getInputValue}
          className=""
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={getInputValue}
          className=""
        />
        <button>Sign Up</button>
      </form>
    </main>
  );
};

export default Form;
