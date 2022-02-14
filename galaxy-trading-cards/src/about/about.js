import "./about.css";

const About = () => {
  return (
    <section className="about-card">
      <div className="main-text">
        <h1>About</h1>
        <p>
          App for randomly generating a trading card with an image of a galaxy,
          that galaxies name, and in future versions, giving information about
          that galaxy and allowing the user to collect, download and trade those
          cards.

          Implementing NASA's image library API, with the keyword 'Galaxy', this
          App returns a randomly selected galaxy card from 1774 different
          options in the API. 
          <br />
          
          The MVP will be a proof of concept limiting the scope to a galaxy card
          generator with an about page describing the app.
          
          Upon future iterations new features will be added, such as a card
          click feature where when a user generates a card they can flip it to
          read more information on that card.
        </p>
      </div>
      <div className="img-hero">
        <img src="https://rneyrinck.github.io/Portfolio/me3.png" alt="pic-o-bob" />
        <div className="img-text">
        <h6>Robert Neyrinck</h6>
        <p>Software Engineer</p>
        </div>
      </div>
    </section>
  );
};
export default About;
