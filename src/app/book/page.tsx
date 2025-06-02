"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";

const page = () => {
  const { get, datas, remove } =
    useFetch<
      Array<{ name: string; page: number; author: string; id: number }>
    >();
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <h1 className=" text-7xl font-black text-center mb-10 mt-10">
        <span className=" text-[#db4500]"> All</span>
        <span className=" text-amber-800"> Books</span>
      </h1>
      <div className=" flex gap-10 flex-wrap">
        {datas?.map((data) => {
          return (
            <>
              <Card
                key={data.id}
                name={data.name}
                author={data.author}
                pages={data.page}
                id={data.id}
                remove={remove}
              />
            </>
          );
        })}
      </div>
      <div className=" flex justify-center">
        <Link
          className=" bg-amber-800 px-4 mt-4 py-2 mb-10 rounded-md text-white"
          href={"/AddBook"}
        >
          add book
        </Link>
      </div>
    </>
  );
};

export default page;
