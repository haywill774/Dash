
import { ColorModeContext, useMode } from "../theme";
import { ThemeProvider,CssBaseline } from '@mui/material';
import Sidebar from "./scene/sidebar/index"
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Topbar from './scene/topbar/index';
import Dashboard from "./scene/dashboard";
import Tablet from "./scene/medium/Tablet";
import Mobile from "./scene/small/Mobile";




function App() {
const [theme, colorMode]= useMode();
const [isSidebar, setIsSidebar] = useState(true);


  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <BrowserRouter >
    <CssBaseline  />
    <div className='app '>
    <Sidebar  isSidebar={isSidebar}/>
    <main className='content'>
    <Topbar  setIsSidebar={setIsSidebar}/>
    <Tablet  />
    <Mobile  />
    <Routes>
    <Route path='/' element={<Dashboard  />} />

    </Routes>
    </main>
    </div>
    </BrowserRouter>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
