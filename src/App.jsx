import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

//PAGES
import HomePage from "./assets/pages/HomePage";
import About from "./assets/pages/About";
import Posts from "./assets/pages/Posts";
//LAYOUTS
import DefaultLayout from "./assets/layouts/DefaultLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/posts" Component={Posts}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
