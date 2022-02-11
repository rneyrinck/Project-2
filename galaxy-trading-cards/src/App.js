
import './App.css';
import Footer from './footer/footer';
import Header from './header/header';
import Main from './main/main';

function App() {
  const urlGalaxy = 'https://images-api.nasa.gov/search?q=galaxy'
  // create function that uses fetch to call the nasa api
  const getGalaxyAPI = () => {
    // const url = urlGalaxy  
    // fetch(url)
  }
  return (
    <div className="App">
     <Header />
     <Main />
     <Footer />
    </div>
  );
}

export default App;
