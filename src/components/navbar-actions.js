"use client";

import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import useCart from "/hooks/use-cart";
import { Button } from "/src/components/ui/button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mr-4 flex items-center border-2 border-slate-500 rounded-full">
      <Button
        onClick={() => router.push("/businesses/cart")}
        className="flex items-center rounded-full bg-[#e69900] text-black dark:text-black px-4 py-2"
      >
        <FaShoppingCart size={20} />
        <span className="ml-2 text-sm font-medium">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
