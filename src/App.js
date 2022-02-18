import { useState } from "react";
import { Route, Routes } from "react-router";
import About from "./about/about";
import "./App.css";
import Footer from "./footer/footer";
import Generator from "./generator/generator";
import Header from "./header/header";
import MyCollection from "./myCollection/myCollection";

function App() {
  const urlGalaxy =
    "https://images-api.nasa.gov/search?media_type=image&q=galaxy&page=";

  const [galaxyList, setGalaxyList] = useState([]);

  const [galaxyCardData, setGalaxyCardData] = useState();

  const [collectionData, setCollectionData] = useState([]);
  const [cardToAdd, setCardToAdd] = useState({});

  const getGalaxyAPI = () => {
    const randomPage = () => {
      let min = Math.ceil(1);
      let max = Math.floor(18);
      let pageMath = Math.floor(Math.random() * (max - min) + min);
      return pageMath;
    };
    const randomGalaxy = () => {
      let min = Math.ceil(0);
      let max = Math.floor(galaxyList.length);
      let randomGalaxyMath = Math.floor(Math.random() * (max - min) + min);
      return randomGalaxyMath;
    };
    const randomPageChoice = randomPage();
    const randomGalaxyChoice = randomGalaxy();
    const url = `${urlGalaxy}${randomPageChoice}`;

    fetch(url)
      .then((res) => res.json())

      .then((data) => setGalaxyList(data.collection.items))
      .then(() => setGalaxyCardData(galaxyList[randomGalaxyChoice]))
      .catch(() => console.log("issue in getGalaxyAPI, App.js line 38"));
  };
  const addToCollection = () => {
    setCardToAdd(galaxyCardData);

    const copy = [...collectionData];
    copy.push(galaxyCardData);
    setCollectionData(copy);
    console.log(collectionData);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Generator
              getGalaxyAPI={getGalaxyAPI}
              galaxyCardData={galaxyCardData}
              collectionData={collectionData}
              setCollectionData={setCollectionData}
              addToCollection={addToCollection}
            />
          }
        />
        <Route
          path="/myCollection"
          element={
            <MyCollection
              collectionData={collectionData}
              setCollectionData={setCollectionData}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
