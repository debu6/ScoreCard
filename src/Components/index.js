import React from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import CreateScoreCard from "./CreateScorecard";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<CreateScoreCard />} />
        <Route path="/create" element={<CreateScoreCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
