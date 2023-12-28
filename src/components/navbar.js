import Link from "next/link";
import Container from "/src/components/ui/container";
import NavbarActions from "/src/components/navbar-actions";
import React from "react";
import MainNav from "./main-nav";
import getCategories from "/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="w-full justify-center flex items-center mt-4">
      <div className="border-b border-neutral-400 dark:border-neutral-600 w-full">
        <Container>
          <div className="w-full justify-between text-center flex h-16 items-center">
            <Link href="/businesses" className="ml-4 gap-2 flex">
              <img
                src="/iqrabiashara.png"
                width={100}
                height={100}
                className="h-14 w-14"
                alt="Biashara Logo"
              />
              <span className="hidden md:flex items-center text-sm md:text-3xl font-extrabold text-[#e6ac00]">
                IQRA
              </span>{" "}
              <p className="hidden md:flex items-center font-bold text-black dark:text-white text-sm md:text-3xl">
                E-STORE
              </p>
            </Link>
            <MainNav className="ml-auto" data={categories} />
            <NavbarActions className="ml-auto" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
