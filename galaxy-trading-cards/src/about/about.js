const About = () => {
  return (
    
      <section>
          <div>
        <h1>About Galaxy Trading Cards</h1>
        <p>
          App for randomly generating a trading card with an image of a galaxy,
          that galaxies name, and in future versions, giving information about
          that galaxy and allowing the user to collect, download and trade those
          cards.<br/>Implementing NASA's image library API, with the keyword
          'Galaxy', this App returns a randomly selected galaxy card from 1774
          different options in the API. This random selection will most likely
          use a variation of the MathFloor(Math.Random()) function multiplied by
          1774 to select a random image, cycle through the selected data set and
          return the image and name.<br/>The MVP will be a proof of concept
          limiting the scope to a galaxy card generator with an about page
          describing the app.<br/>Upon future iterations new features will be added,
          such as a card click feature where when a user generates a card they
          can flip it to read more information on that card.
        </p>
        </div>
        <div>
        <img src='' alt="pic-o-bob"/>
        </div>
      </section>
   
  );
};
export default About;
