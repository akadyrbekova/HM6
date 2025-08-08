"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-red-500">MAIN PAGE</h1>
      <div className="flex flex-col">
        <Link className="no-underline" href={"/product"}>
          Product Page
        </Link>
        <Link className="no-underline" href={"/contact"}>
          Contact page
        </Link>
        <Link className="no-underline" href={"/about"}>
          About page
        </Link>
      </div>
    </div>
  );
}
