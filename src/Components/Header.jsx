import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/images/logo.jpg";
import { FaSearchengin } from "react-icons/fa";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../Context/ThemeContext";
import GlobalApi from "../Services/GlobalApi";

function Header() {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  // here
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log("theme", theme);
  }, []);
  //here
  const handleSearch = async (e) => {
    setSearchQuery(e);
    let allGames = await GlobalApi.getAllGames;
    if (e.trim() === "") {
      // If the search query is empty, clear the search results
      setSearchResults([]);
    } else {
      const filteredResults = allGames.data.results.filter((game) =>
        game.name.toLowerCase().includes(e.toLowerCase())
      );
      setSearchResults(filteredResults);
      console.log("results here" + filteredResults);
    }
  };
  // here
  return (
    <>
      <div className=" flex items-center p-3">
        <img src={logo} width={60} height={60} />
        <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
          <FaSearchengin />
          <input
            type="text"
            placeholder="Search for games by their names "
            value={searchQuery}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            className=" px-2 bg-transparent outline-none size-full p-2 "
          />
        </div>
        <div>
          {theme == "dark" ? (
            <BsFillSunFill
              className=" text-[35px] bg-slate-200 text-black cursor-pointer rounded-full p-2"
              onClick={() => {
                setTheme("light");
                localStorage.setItme("theme", "light");
              }}
            />
          ) : (
            <BsFillMoonFill
              className=" text-[35px] bg-slate-200 text-black rounded-full p-2 cursor-pointer"
              onClick={() => {
                setTheme("dark");
              }}
            />
          )}
        </div>
      </div>
      <div>
        {searchResults.length > 0 && (
          <div className=" flex justify-start  items-center rounded-xl  ">
            <ul className=" ">
              {searchResults.map((game) => (
                <li
                  className=" transition-all duration-200 ease-in-out cursor-pointer dark:text-white text-[20px]   hover:bg-[#3583e965] hover:font-bold w-screen p-4 hover:scale-95
                  hover:rounded-xl "
                  key={game.id}
                >
                  <div className="flex gap-5">
                    <img
                      src={game.background_image}
                      className="h-[45px] w-[85px] rounded-lg object-cover"
                    />
                    {game.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
