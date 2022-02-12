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
  const [galaxyList, setGalaxyList] = useState();

  // set state for galaxy card generated
  const [galaxyCard, setGalaxyCard] = useState();
  // need random formula for which page to send the url to out of 18 total pages
  // example of 18th page -> https://images-api.nasa.gov/search?q=galaxy&page=18
  
  // randomPage()
  // function for random selection of galaxy items after api call
  
  // create function that uses fetch to call the nasa api
  const getGalaxyAPI = () => {
  
    const randomPage = () => {
        // resource for MATH https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      
        let min = Math.ceil(1);
      let max = Math.floor(19);
      let pageMath = Math.floor(Math.random() * (max - min) + min);
      // console.log(pageMath)
      return pageMath;
    };
    const randomGalaxy = () => {
      let min = Math.ceil(0);
      let max = Math.floor(galaxyList.length);
      let randomGalaxyMath = Math.floor(Math.random() * (max - min) + min);
      // console.log(randomGalaxyMath)
      return randomGalaxyMath;
    };
    const url = `${urlGalaxy}${randomPage()}`;
    // console.log(url)
    fetch(url)
      .then((res) => res.json())

      .then((data) => setGalaxyList(data.collection.items))
    
      .then(() => setGalaxyCard(galaxyList[randomGalaxy()]))
    
      .catch(() => console.log("issue in getGalaxyAPI, App.js line 38"))
  };
  // getGalaxyAPI()
  // console.log(galaxyCard)

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
