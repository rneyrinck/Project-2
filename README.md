# Project-2 OverView -> GALAXY TRADING CARDS

![Gif of Galaxy](READMEIMAGES/space-gif-space.gif)

## Project Links

- [Github Repo]()
- [Project on githubpages]()

#### Requirements - delete later

#### Your website must:

- Be a working, interactive, React application.
- Include data from a third-party API.
  - TRY OUT your API in the browser by making an fetch request before you get too emotionally invested in it, to make sure it works the way you think it does...**YOU ARE REQUIRED TO SHOW US YOU CAN RECEIVE THE DATA FOR YOUR PROPOSAL**
- Include React Router with at least 2 routes
- Have at least 5 separate components, using a readable file structure.
- Be built using Create React App.
- Built mobile first
- Implement responsive design using flexbox, grid, or another css framework.
- Use React Hooks
- Be deployed on [github pages](https://github.com/gitname/react-gh-pages)

#### other requirements

- Be properly indented.
- Be written with semantic, camelCase - JavaScript variable names.
- Be written with kebab-case (dashes) CSS - class names.
- Contain no console.log() or commented out code in final version.
- Use only React for DOM manipulation.
- No pre-loaded create-react-app files or code.

## Description

App for randomly generating a trading card with an image of a galaxy, that galaxies name, and in future versions, giving information about that galaxy and allowing the user to collect, download and trade those cards.

Implementing NASA's image library API, with the keyword 'Galaxy', this App returns a randomly selected galaxy card from 1774 different options in the API. This random selection will most likely use a variation of the `MathFloor(Math.Random()) ` function multiplied by 1774 to select a random image, cycle through the selected data set and return the image and name.

The MVP will be a proof of concept -> limiting the scope to a galaxy card generator with an about page describing the app.

Upon future iterations new features will be added, such as a card click feature where when a user generates a card they can flip it to read more information on that card.

## API used

The API used is [NASA's image and video library API](https://images.nasa.gov/) (click this to view some of the pictures in a GUI of the content).

The [documentation](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf) states an API key is not needed to access the information, and while this is true, it does limit the amount of requests to 1000 per hour(which shouldn't be a problem if we avoid infinite loops!).

This app used the API with a specific keyword searched('galaxy') to produce a list of 1774 items(different galaxy images with plenty of additional data for future iterations and features).

### Each item in the galaxy list contains three sections:

#### href

- link to an array with five different image size options which is complicated and will most likely be ignored

#### data

- array with plenty of info -> items used will most likely be:
  - title(name of galaxy card)
  - nasa_id(for a unique key for each card for future use)
  - description(for post mvp card flip description of the image)

#### links

- single link to large sized photo which is much more friendly than the href section since we will only need to go two levels into each item to return a picture instead of using an additional url call to pull data from the array in href

#### here is what the API returns

First item in array with metadata info on top

```
"collection": {
"version": "1.0",
"href": "http://images-api.nasa.gov/search?q=galaxy",
"items": [
{
"href": "https://images-assets.nasa.gov/image/PIA04921/collection.json",
"data": [],
"links": [
{
"href": "https://images-assets.nasa.gov/image/PIA04921/PIA04921~thumb.jpg",
"rel": "preview",
"render": "image"
}
]
},
{
"href": "https://images-assets.nasa.gov/image/PIA04634/collection.json",
"data": [
{
"center": "JPL",
"title": "Galaxy NGC5474",
"nasa_id": "PIA04634",
"media_type": "image",
"keywords": [
"Galaxy Evolution Explorer GALEX",
"NGC5474"
],
"date_created": "2003-07-25T16:20:14Z",
"description_508": "NASA Galaxy Evolution Explorer took this ultraviolet color image of the galaxy NGC5474 on June 7, 2003. NGC5474 is located 20 million light-years from Earth and is within a group of galaxies dominated by the Messier 101 galaxy.",
"secondary_creator": "NASA/JPL/Caltech",
"description": "NASA Galaxy Evolution Explorer took this ultraviolet color image of the galaxy NGC5474 on June 7, 2003. NGC5474 is located 20 million light-years from Earth and is within a group of galaxies dominated by the Messier 101 galaxy. Star formation in this galaxy shows some evidence of a disturbed spiral pattern, which may have been induced by tidal interactions with Messier 101.  http://photojournal.jpl.nasa.gov/catalog/PIA04634"
}
],
"links": [
{
"href": "https://images-assets.nasa.gov/image/PIA04634/PIA04634~thumb.jpg",
"rel": "preview",
"render": "image"
}
]
},
}
```

[Check out more of NASA's API's here](https://api.nasa.gov/)

## Wireframes

cloudinary, add link.

define react componenets and architectural design of app

- [wireframes link -> high fidelity mockup]()
- [link to react architecture]()
#### React Architecture(includes postMVP) 
![react architecture](READMEIMAGES/ReactStructureGTC.png)
#### MVP Wireframe
![mvp wire frame](READMEIMAGES/MvpWireFrameGTC.png)

### MVP/PostMVP
#### postMVP Wireframe
![post mvp wire frame p1](READMEIMAGES/PostMvpWireFrameP1GTC.png)
![post mvp wire frame p2](READMEIMAGES/PostMvpWireFrameP2GTC.png)

#### MVP ex

- Header, footer & nav functionality complete
    * header/footer stay on page
    * nav bar component appears on click in
    * nav bar component disapears on click out
- Main
    * generator page
        - API call works, data is pulled, card displayed
        - button creates new random card with image & name
    * about 
        - links to portfolio, contact info
        - description of product w/ postmvp
        - pic-o-bob

#### PostMVP ex

- Landing page
- Add to collection button in generator routes that card data to collection page   
- collection page component displays added cards
    * export feature to download card
    * postpostMVP make cards small and add additional onClick functionality to display that card large with the flip feature
- randomized icons(rotated pixel font from google) on each card for added uniqueness 
- Onclick feature in generator that flips card to display description of that galaxy(info pulled from 'description' in API)

## Componenents

#### not required but helpful

break down logic into stateless/stateful components

| Component |                          Description                          |
| --------- | :-----------------------------------------------------------: |
| App       | This will make the initial data pull and include React Router |
| Header    |          This will render the header include the nav          |
| Hamburg   |     This will render hamburger dropdown link to gen/about     |
| Generator |   This will hold the main API call, displays the galaxycard   |
| GenButton |   This will perform the fetch function, gives data to cards   |
| About     |         This will display product description/tech used       |
| Footer    |          This will render the footer includes my name         |

#### post mvp components
| MyCollect |         This will render collection page of saved cards       |
| ColBtn    |    This will save generated card in genrator to MyCollect     |
| SmlCard   |    This will render MyCollect cards as small components       |

## TimeFrame

| Component        | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------- | :------: | :------------: | :------------: | :---------: |
| File Structure   |    H     |      2hrs      |      1 hr      |             |
| Working with API |    H     |      3hrs      |                |             |
| Rend components  |    H     |      5hrs      |                |             |
| Acheive API call |    H     |      2hrs      |                |             |
| Generator        |    H     |      5hrs      |                |             |
| GenButton        |    H     |      1hrs      |                |             |
| About            |    M     |      1hrs      |     20min      |             |
| Hamburg          |    M     |      5hrs      |                |             |
| Footer           |    M     |      .5hrs     |     20min      |             |
| Header           |    M     |      .5hrs     |     20min      |             |
| MyCollect        |    L     |      7hrs      |                |             |
| ColBtn           |    L     |      4hrs      |                |             |
| SmlCard          |    L     |      6hrs      |                |             |
| Total            |    H     |      42hrs     |                |             |

## Additional Libraries(if used)

Other libraries like Axios, reactstrap, d3, etc

## Code Snippet

describe some code youre proud of! No greater than 10 lines

```
<h1>hello world!</h1>

```
