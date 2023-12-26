import Link from "next/link";
import Container from "/src/components/ui/container";
import NavbarActions from "/src/components/navbar-actions";
import React from "react";
import MainNav from "./main-nav";
import getCategories from "/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="w-full justify-center flex items-center">
      <div className="border-b border-neutral-400 dark:border-neutral-300 w-full">
        <Container>
          <div className="w-full justify-between  flex h-16 items-center">
            <Link href="/businesses" className="ml-0 mr-auto flex  gap-x-2">
              <span className="font-extrabold text-pink-500">IQRA-</span>
              <p className="font-bold text-xl">STORE</p>
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
