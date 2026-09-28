import './App.css'
import Card from './components/Card';
import ThemeBtn from './components/Theme';
import { ThemeProvider } from './contexts/theme'
import { useState, useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <h1 className='p-4 bg-slate-400 text-center text-4xl font-medium'>Hi from React</h1>
      <div className="flex flex-wrap items-center mt-4">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"> 
                <ThemeBtn />
            </div>
              <div className="w-full max-w-sm mx-auto">   
                <Card />
            </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
