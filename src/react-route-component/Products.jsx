import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search products" />
      </div>
      <nav>
      {/* relative links -> no / construct throw current url       absolute link -> /    construct the path from root*/}
        <Link to="featured">Featured</Link>
        {" "}
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};
