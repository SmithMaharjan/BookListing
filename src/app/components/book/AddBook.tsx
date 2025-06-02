"use client";
import React, { useState } from "react";
import Input from "../Input";
import useFetch from "@/app/hooks/useFetch";
type Book = {
  name: string;
  pages: number;
  author: string;
};
const AddBook = () => {
  const { post } = useFetch();
  const [data, setData] = useState<Book>({
    name: "",
    pages: 0,
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: name === "pages" ? parseInt(value) | 0 : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await post("books", data);
    if (result?.sucess) {
      alert("book added");
    }
  };
  return (
    <form
      className=" flex flex-col gap-8 items-center bg-amber-900 mx-[450px] rounded-tr-[150px] rounded-bl-[150px] p-20 mt-4"
      onSubmit={handleSubmit}
    >
      <h1 className=" font-black text-5xl text-white">Add Book</h1>
      <div>
        <Input
          handleChange={handleChange}
          type="text"
          name="name"
          value={data.name}
          size="md"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          type="number"
          name="pages"
          value={data.pages}
          size="md"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          type="text"
          name="author"
          value={data.author}
          size="md"
        />
      </div>
      <button className=" text-white cursor-pointer" type="submit">
        submit
      </button>
    </form>
  );
};

export default AddBook;
