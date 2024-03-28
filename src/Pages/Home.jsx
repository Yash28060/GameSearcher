import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenresId from "../Components/GamesByGenresId";

function Home() {
  const [allGameList, SetAllGameList] = useState();
  const [gameListByGenres,SetGameListByGenres] = useState([]);
  const [selectedGenres,setSelectedGenres] = useState('Action')
  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4);
  }, []);
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      SetAllGameList(resp.data.results);
    });
  };
  const getGameListByGenreId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      SetGameListByGenres(resp.data.results);
    });
  };
  function randomNumberInRange(){
    const randomNo =  Math.floor(Math.random() * 20)
    return randomNo;
  }
  return (
    <>
      <div className=" grid grid-cols-4 px-8 gap-2">
        <div className="  hidden md:block ">
          <GenreList generalId={(generalId)=>getGameListByGenreId(generalId)}
          selectedGenres={(name)=>setSelectedGenres(name)} />
        </div>
        <div className=" col-span-4 md:col-span-3">
          {allGameList?.length > 0 &&gameListByGenres.length>0? (
            <div>
              <Banner gameBanner={allGameList[randomNumberInRange()]} />
              <TrendingGames gameList={allGameList}  />
              <GamesByGenresId gameList={gameListByGenres}
              selectedGenres={selectedGenres}/>
            </div>
          ) : null}
          {/* the above conditions shows that if the api is not able to fetch any data then just pass null if the api fetches data then go with it, as api takes time to fetch data */}
        </div>
      </div>
    </>
  );
}

export default Home;
