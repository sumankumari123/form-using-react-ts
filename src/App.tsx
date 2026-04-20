import { useState } from "react";
import Counter from "./components/Counter";
import { Routes, Route } from "react-router-dom";

import Form from "./components/Form";
import SignIN from "./components/SignIN";
import SignUP from "./components/SignUP";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIN />} />
        <Route path="/sign-up" element={<SignUP />} />
        // {/* <Counter/> */}
      </Routes>
    </>
  );
}

export default App;
