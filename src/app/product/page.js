"use client";

import Link from "next/link";
import Api from "./api/Api";
console.log(Api);

export default function Product() {
  return (
    <div className="flex items-center flex-col">
      <h1> All products</h1>
      <div className="flex gap-4">
        <Link className="no-underline inline-block mx-2" href={"product/women"}>
          Женская одежда
        </Link>
        <Link className="no-underline inline-block mx-2" href={"product/men"}>
          Мужская одежда
        </Link>
        <Link
          className="no-underline inline-block mx-2"
          href={"product/electronic"}
        >
          Электроника
        </Link>
      </div>
    </div>
  );
}
