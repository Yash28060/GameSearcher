import Home from "./Pages/Home";
import Header from "./Components/Header";
import "./App.css";
import { useEffect, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center  items-center">
          <div>
            <PropagateLoader
             

              color={"linear-gradient(to left, #009999 0%, #0033cc 100%)"}
              loading={loading}
              size={35}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <br /> <br /> <br />
            <br /> <br /> <br />
          </div>
          <h1 className=" font-bold  text-cyan-800">Loading...</h1>
        </div>
      ) : (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div
            className={`${theme} ${
              theme == "dark" ? "bg-[#121212]" : null
            } min-h-full`}
          >
            <Header />
            <Home />
          </div>
        </ThemeContext.Provider>
      )}
    </>
  );
}

export default App;
