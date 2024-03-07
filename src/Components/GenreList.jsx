import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({generalId, selectedGenres}) {
  const [genreList, SetGenreList] = useState([]);
  const [activeIdx, SetActiveIdx] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);
  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      // console.log(resp.data.results);
      SetGenreList(resp.data.results);
    });
  };

  return (
    <>
      <div>
        <h2 className=" text-[30px] dark:text-white">
          Genre
          {genreList.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <div
              onClick={() => {
                SetActiveIdx(index);
                generalId(item.id);
                selectedGenres(item.name)
              }}
              className={`flex gap-2.5 items-center cursor-pointer mb-5
            hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600 ${
              activeIdx == index ? "bg-gray-300 dark:bg-gray-600" : null
            }`}
            >
              <img
                src={item.image_background}
                className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-125 transition-all ease-out duration-300" ${
                  activeIdx == index ? "scale-125" : null
                }`}
              />
              <h3
                className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${
                  activeIdx == index ? "font-bold" : null
                }`}
              >
                {item.name}
              </h3>
            </div>
          ))}
        </h2>
      </div>
    </>
  );
}

export default GenreList;
