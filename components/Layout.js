import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import NavbarSSR from "./NavbarSSR";
import NavbarSSG from "./NavBarSSG";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <h2>Below is my CSR-Client Side Render NavBar</h2>
      <Navbar />
      <h2>Below is my SSR-Server Side Render NavBar</h2>
      <NavbarSSR />
      <h2>Below is my SSG-Static Site Generation NavBar</h2>
      <NavbarSSG />
      {children}
    </div>
  );
}
