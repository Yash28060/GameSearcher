import Home from "./Pages/Home";
import Header from "./Components/Header";
import "./App.css";
import { useEffect, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  return (
    <>
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
    </>
  );
}

export default App;
