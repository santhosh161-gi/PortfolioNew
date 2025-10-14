import React,{ useContext ,createContext ,useState ,useEffect} from "react";

const ThemeContext = createContext();

export const useTheme =()=>useContext(ThemeContext);

export const ThemeProvider=({children})=>{

    const[theme,setTheme]=useState(()=>localStorage.getItem('theme')|| 'light');

    useEffect(()=>{
        document.body.setAttribute('data-theme',theme);
        localStorage.setItem('theme',theme);
    },[theme]);

    const toggleTheme =() =>{
     setTheme((preTheme)=> (preTheme === 'light' ? 'dark' : 'light'))
    };

    return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    {children}
    </ThemeContext.Provider>
    );
}

