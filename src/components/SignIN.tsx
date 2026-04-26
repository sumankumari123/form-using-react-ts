import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";


const SignIN = () => {
// useEffect(()=>{
//   const existingData = localStorage.getItem('auth')
// console.log("existingData signIn",existingData)
// let userData = existingData? JSON.parse(existingData):[];
//   userData.push(form)
// },[])
  const navigate = useNavigate();
  const [form, setFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

// console.log("getDataFromLocalStorage", userData)
const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();

    if (!form.email.trim()) {
      alert("Email is required");
      return;
    }
    
    if (!form.password.trim()) {
      alert("Password is required");
      return;
    }
 
   const existingData = localStorage.getItem('auth');
   const presentData = JSON.parse(existingData);

   const matchedUser = presentData.find(( u: any)=>
    u.email === form.email && u.password === form.password)
  console.log("existingData signIn", presentData) 
console.log("matchedUser", matchedUser)

  if(matchedUser){
    alert("Login Successful ✅");
    navigate("/home")
  }else{
    alert("Invalid Credentials ❌");
  }
}

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
  <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4">
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

    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
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
