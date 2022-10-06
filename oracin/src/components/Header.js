import React from "react";
import Cart from "./Cart";

function Header() {
  return (
    <div className="navbar bg-base-100 border-b-2">
      <a className="btn btn-ghost normal-case text-xl" href="/">Oracin</a>
      <div className="flex-1" />
      <div className="flex">
       <Cart/>
      </div>

    </div>
  );
}

export default Header;
