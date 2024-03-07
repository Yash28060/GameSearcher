import React, { useEffect } from "react";

function TrendingGames({ gameList }) {
  useEffect(() => {
    console.log("gameList", gameList);
  }, []);

  return (
    <>
      <div className="mt-5 hidden md:block">
        <h2 className=" font-bold text-[30px] dark:text-white">
          Trending Games
        </h2>
        <div className="hidden md:grid  md:grid-cols-3  gap-4 lg:grid-cols-4 mt-5">
          {gameList.map(
            (item, index) =>
              index < 4 && (
                // eslint-disable-next-line react/jsx-key
                <div className=" bg-[#3583e965] group rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                  <img
                    src={item.background_image}
                    className="h-[270px] rounded-lg object-cover"
                  />
                  <h2 className="dark:text-white text-[20px] font-bold">
                    {item.name}
                  </h2>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default TrendingGames;
