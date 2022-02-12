import { useState } from "react";
import "./App.css";
import Footer from "./footer/footer";
import GalaxyCard from "./galaxyCard/galaxyCard";
import Generator from "./generator/generator";
import Header from "./header/header";
import Main from "./main/main";

function App() {
  const urlGalaxy = "https://images-api.nasa.gov/search?q=galaxy&page=";

  // set state for GalaxyList data info
  const [galaxyList, setGalaxyList] = useState([]);
  // set state for galaxy card generated
  const [galaxyCard, setGalaxyCard] = useState([])
  // need random formula for which page to send the url to out of 18 total pages
  // example of 18th page -> https://images-api.nasa.gov/search?q=galaxy&page=18
  let pageNumber = ''
  const randomPage = () => {
    // resource for MATH https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    let min = Math.ceil(1);
    let max = Math.floor(19);
    let pageMath = Math.floor(Math.random() * (max - min) + min);
    pageNumber = pageMath;

   return(pageNumber)
  };

  // function for random selection of galaxy items after api call
  let galaxyPick = galaxyList
  const randomGalaxy = () => {
    let min = Math.ceil(0);
    let max = Math.floor(galaxyList.length);
    let randomGalaxyMath = Math.floor(Math.random() * (max - min) + min);
    galaxyPick = galaxyList[randomGalaxyMath];
    return(galaxyPick)
  };

  // create function that uses fetch to call the nasa api
  const getGalaxyAPI = () => {
    const url = `${urlGalaxy}${randomPage()}`;
    // console.log(url)
    fetch(url)
      .then((res) => res.json())
      // \/\/\/\\/set carddata to be the retunr without any metadata, version info, or other unused information
      .then((data) => setGalaxyList(data.collection.items[0]))
      // .then((data)=>console.log(data.collection.items[0]))
      // .then(()=>setGalaxyCard(randomGalaxy()))
      // .then(()=>console.log(galaxyCard))
      .catch(() => console.log("issue in getGalaxyAPI, App.js line 38"));
  };
getGalaxyAPI()


  // take that getgalaxyAPI functin and send it to the button component
  // onclick in button component activate that fetch function
  // send it back up the tree to APP then back to galaxy card to populate name and image
  // because there will only be one component at a time we only need one state
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
