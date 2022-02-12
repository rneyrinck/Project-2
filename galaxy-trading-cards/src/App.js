
import { useState } from 'react';
import './App.css';
import Footer from './footer/footer';
import GalaxyCard from './galaxyCard/galaxyCard';
import Generator from './generator/generator';
import Header from './header/header';
import Main from './main/main';

function App() {
  const urlGalaxy = 'https://images-api.nasa.gov/search?q=galaxy'
  // need random formula for which page to send the url to out of 18 total pages
  // example of 18th page -> https://images-api.nasa.gov/search?q=galaxy&page=18
  const randomPage = () => {
    // resource for MATH https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    let min = Math.ceil(1)
    let max = Math.floor(19)
    let pageMath = Math.floor(Math.random()*(max-min)+min)
    let pageNumber = `&page=${pageMath}`  
    console.log(pageNumber)
    return(
     pageNumber
    )
  }
  randomPage()
 
  // set state for GalaxyCard info
  const [galaxyList,setGalaxyList] = useState([{"href":'1'},{"href":'2'},{"href":'3'}])
  // function for random selection of galaxy items after api call
  const randomGalaxy = () => {
    let min = Math.ceil(0)
    let max = Math.floor(galaxyList.length)
    let randomGalaxyMath = Math.floor(Math.random()*(max-min)+min)
    let galaxyPick = galaxyList[randomGalaxyMath]
    return(
      console.log(galaxyPick)
    )
  }
  
 randomGalaxy()
  // create function that uses fetch to call the nasa api
  const getGalaxyAPI = () => {
    const url = `${urlGalaxy}${randomPage}` 
    fetch(url)
    .then((res)=>res.json())
    // \/\/\/\\/set carddata to be the retunr without any metadata, version info, or other unused information
    .then((data)=>setGalaxyList(data.items))
    .catch(()=>console.log('issue in getGalaxyAPI, App.js line 20'))
  }

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
