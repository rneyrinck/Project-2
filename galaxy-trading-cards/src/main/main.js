import { Route, Routes } from "react-router";
import About from "../about/about";
import GalaxyCard from "../galaxyCard/galaxyCard";
import Generator from "../generator/generator";
import './main.css'

const Main = () => {
  
  return (
    <main>
       
       {/* <Routes>
        <Route path="/" element={<Generator galaxyList={galaxyList} setGalaxyList={setGalaxyList} galaxyCard={galaxyCard} setGalaxyCard={setGalaxyCard} getGalaxyAPI={getGalaxyAPI} urlGalaxy={urlGalaxy}/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes> */}
      
    </main>
  );
};
export default Main;
