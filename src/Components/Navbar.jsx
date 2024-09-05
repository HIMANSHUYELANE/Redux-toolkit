import React from "react";

export default function Navbar() {
  return (
    <div className="w-80 mx-auto">
      <h1 className="text-center">ADMIN TABLE</h1>
      <ul className="flex justify-evenly">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROJECT</li>
        <li>CODE</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}
