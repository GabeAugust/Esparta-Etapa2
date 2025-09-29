"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const MenuHamburger = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <img src="../../assests/menu.png" alt="" />
      </SheetTrigger>
      <SheetContent className="bg-[#21262D] border-0 w-[40%] flex justify-center ">
         <VisuallyHidden>
            <SheetTitle>Menu de navegação</SheetTitle>
          </VisuallyHidden>
          <ul className="flex items-center flex-col w-[40%] h-dvh  rounded-tl-lg rounded-bl-lg ">
            <Link
              href="/"
              className={`pb-1.5 xl:border-b-1 transition-colors duration-200 font-semibold mt-10 ${
                pathname === "/" ? "xl:border-[#328DF7]" : "border-transparent"
              }`}
            >
              <li className="font-satoshi">Home</li>
            </Link>
            <hr className="max-md:border-[1px] max-md:border-[#FFFFFF80] max-md:w-[116px]"></hr>
            <Link
              href="/favorites"
              className={`pb-1.5 xl:border-b-1 transition-colors duration-200 font-semibold max-md:m-2 ${
                pathname === "/favorites"
                  ? "border-[#328DF7]"
                  : "border-transparent"
              }`}
            >
              <li className="font-satoshi">Favoritos</li>
            </Link>
          </ul>
     
      </SheetContent>
    </Sheet>
  );
};

export default MenuHamburger;
