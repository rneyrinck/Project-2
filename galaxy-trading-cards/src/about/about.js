import "./about.css";

const About = () => {
  return (
    <section className="about-card">
      <div className="main-text">
        <h1>About</h1>
        <p>
          This app implements NASA's images and videos API to generate a trading
          card game inspired galaxy card.
          <br />
          <br />
          In the future iterations a feature to download favorite cards, add
          them to a collection, or even turn them into nft collectibles are all
          on the horizon.
          <br />
          <br />
          Check out some of my other projects in my portfolio by clicking on my picture below.
        </p>
      </div>
      <div className="img-hero">
        <a href="https://rneyrinck.github.io/Portfolio.v.2/"><img
          src="https://rneyrinck.github.io/Portfolio/me3.png"
          alt="pic-o-bob"
        /></a>
        <div className="img-text">
          <h6>Robert Neyrinck</h6>
          <p>Software Engineer</p>
        </div>
      </div>
    </section>
  );
};
export default About;
