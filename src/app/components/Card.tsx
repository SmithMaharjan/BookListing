import React from "react";

type Props = {
  name: string;
  author: string;
  pages: number;
  id: number;
  remove: any;
};
const Card = ({ name, author, pages, id, remove }: Props) => {
  return (
    <>
      <div className="ml-32 cursor-pointer border-7 border-[#0c0c0c] h-78 w-62 bg-linear-to-r from-orange-600 via-amber-900 to-amber-950 bg-gray-100 flex flex-col items-center justify-center rounded-md">
        <div className=" w-[90%] bg-amber-800 rounded-t-full text-white h-[90%] flex flex-col gap-5 items-center pt-10 mt-1">
          <div className="px-5 text-2xl font-bold text-center underline">
            {name}
          </div>
          <div className=" text-lg font-bold">{author}</div>
          <p className="text-sm opacity-70">Pages: {pages}</p>
        </div>
        <button
          onClick={() => remove("books", id)}
          className=" bg-red-800 text-white px-3 cursor-pointer my-2"
        >
          delete
        </button>
      </div>
    </>
  );
};

export default Card;
