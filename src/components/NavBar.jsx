import Link from "next/link";
import React from "react";
Link;

const NavBar = () => {
  return (
    <div className="flex max-w-screen absolute z-10 justify-between items-center  ml-10 text-4xl ">
      <h1>StockLom</h1>
      {/* <nav className="flex gap-4">
        <Link href={"Home"}>Home</Link>
        <Link href={"About"}>About</Link>
        <Link href={"Contact"}>Contact</Link>
      </nav> */}
    </div>
  );
};

export default NavBar;
