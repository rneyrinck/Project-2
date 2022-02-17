import { BsLink45Deg, BsLinkedin } from "react-icons/bs";
import "./about.css";

const About = () => {
  return (
    <section className="about-card">
      <div className="title-explainer">
        <h1>About</h1>
        <p>
          This app implements{" "}
          <a href="https://api.nasa.gov/" target="_blank">
            NASA's images and videos API
          </a>{" "}
          and uses react, react-bootstrap, and the react icons library for
          styling.
          <br />
          <br />
          This is the first fully fleshed out app I've made and I learned alot
          during the process! In future projects, and continued iteration on
          this app, I'm looking forward to leaning into react-bootstrap for
          layout and responsive design.
          <br />
          <br />
          Check out some of my other projects by clicking on my portfolio link
          below or click my name to connect on LinkedIn.
        </p>
        <div className="hero">
          <a href="https://www.linkedin.com/in/robert-neyrinck" target="_blank">
            {" "}
            <h6>
              <BsLinkedin /> Robert Neyrinck{" "}
            </h6>{" "}
          </a>

          <a target="_blank" href="https://rneyrinck.github.io/Portfolio.v.2/">
            <BsLink45Deg className="svg_icons" /> Portfolio{" "}
          </a>
        </div>
      </div>{" "}
    </section>
  );
};
export default About;
