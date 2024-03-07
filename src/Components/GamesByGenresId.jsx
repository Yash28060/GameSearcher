import React, { useEffect } from "react";

function GamesByGenresId({ gameList, selectedGenres}) {
  useEffect(() => {
    console.log("GameList", gameList);
  }, []);
  return (
    <>
      <div>
        <h2 className=" font-bold text-[30px] dark:text-white mt-5">
          {selectedGenres}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gameList.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div className="bg-[#3583e965] p-3 rounded-lg pb-10 h-full  hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer ">
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2 className=" items-center flex justify-center  text-[20px] dark:text-white font-bold ">
              {item.name}{" "}
              <span className=" p-1 rounded-sm ml-2 text-[10px] bg-green-200 text-green-900 font-medium">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="dark:text-gray-300 text-gray-700 items-center  flex justify-around ">
              ⭐{item.rating + " "}
              💭{item.reviews_count + " "}
              🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default GamesByGenresId;
