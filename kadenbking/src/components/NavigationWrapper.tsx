'use client';

import { useState } from "react";
import Nav from "./Nav";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <>
      <Nav navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <NavMenu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
