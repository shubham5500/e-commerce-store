import React from "react";
import Container from "./UI/container";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
        <Link className="ml-4 lg:ml-0 gap-x-2" href="/">
            <p>STORE</p>
        </Link>
      </Container>
    </div>
  );
};

export default Navbar;
