import React from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Users from "./components/users";
import Characters from "./components/characters";
import FireBase from "./components/firebase";
import Login from "./components/login";
import Signup from "./components/signup";
import PageNotFound from "./components/PageNotFound";
import { ErrorBoundary } from "react-error-boundary";

//Nested Routes

const App = () => {
  function ErrorFallBack({ error, resetErrorBoundary }) {
    return (
      <div className = "error-boundary">
        <p>An error has occured</p>
        <a href="/">Home</a>



      </div>
    );
  }
  return (
    <section>
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Characters" element={<Characters />} />
            <Route path = "/FireBase" element={<FireBase/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default App;
