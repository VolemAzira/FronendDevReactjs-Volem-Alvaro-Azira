import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
        <div className="bg-blue-500 text-white px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-white group active:text-blue-500 focus:outline-none focus:ring">
            <Link
              to="/"
              className="relative block px-8 py-3 bg-[#1A2238] border border-current"
            >
              Go Home
            </Link>
          </a>
        </button>
        <br />
        <footer className="">
          <p>© 2023 VolemAzira</p>
        </footer>
      </main>
    </div>
  );
};

export default ErrorPage;
