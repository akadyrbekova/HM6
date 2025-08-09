"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const { category } = params;

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1>
          В роутинге c категорией:
          <span className="text-red-500"> {category}</span>
        </h1>
      </div>
      <button>
        <Link href={"/product"}>Кнопка назад</Link>
      </button>
    </div>
  );
}
