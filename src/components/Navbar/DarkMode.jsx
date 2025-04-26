import React from 'react';
import SunBtn from "../../assets/Navbar/sun.png";
import MoonBtn from "../../assets/Navbar/moon.png";


const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;

    React.useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
    return (
        <div className='relative'>
            <img src={SunBtn}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
             className={`w-14 py-1 border border-primario rounded-full px-4 cursor-pointer drop-shadow-sm transition-all duration-300 absolute right-0 z-10 hover:scale-105 ${theme === "dark"? "opacity-0" : "opacity-100"}`}
            />    
            <img 
            src={MoonBtn}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className='w-14 py-1 border border-primario rounded-full px-4 group cursor-pointer drop-shadow-sm transition-all duration-300 hover:scale-105 '
            />
        </div>
    )
}

export default DarkMode