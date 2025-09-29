"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TextLink = () => {
  const pathname = usePathname();
  return (
    <ul className="flex items-center justify-center gap-14 flex-row w-[100%] ">
      <Link
        href="/"
        className={`pb-1.5 border-b-1 transition-colors duration-200 font-semibold ${
          pathname === "/" ? "border-[#328DF7]" : "border-transparent"
        }`}
      >
        <li className="font-satoshi">Home</li>
      </Link>
      <Link
        href="/favorites"
        className={`pb-1.5 border-b-1 transition-colors duration-200 font-semibold ${
          pathname === "/favorites" ? "border-[#328DF7]" : "border-transparent"
        }`}
      >
        <li className="font-satoshi">Favoritos</li>
      </Link>
    </ul>
  );
};

export default TextLink;
