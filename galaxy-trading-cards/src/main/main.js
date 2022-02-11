import { Route, Routes } from "react-router";
import About from "../about/about";
import Generator from "../generator/generator";

const Main = () => {
  return (
    <main>
       
       <Routes>
        <Route path="/" element={<Generator/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      
    </main>
  );
};
export default Main;
