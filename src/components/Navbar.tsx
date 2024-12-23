import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-main">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
