import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
    </div>
  );
}
