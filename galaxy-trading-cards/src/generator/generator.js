
import { useEffect, useState } from "react";

import GalaxyCard from "../galaxyCard/galaxyCard";

import "./generator.css";
const Generator = (props) => {
  const [galaxyCardHTML, setGalaxyCardHTML] = useState(
    <article className="galaxy-card">
      <div className="galaxy-card-title">
        <h3 className="galaxy-name">What Galaxy Will You Get?</h3>
      </div>
      <div className="card-info"></div>
    </article>
  );
  const APICall = () => {
    props.getGalaxyAPI();

    if (props.galaxyCardData) {
      setGalaxyCardHTML(
        <article className="galaxy-card">
          <div className="galaxy-card-title">
            <h3 className="galaxy-name">{props.galaxyCardData.data[0].title}</h3>
          </div>
          <div className="card-info"><img className="galaxy-image" src={props.galaxyCardData.links[0].href} alt=''/></div>
        </article>
      );
    } else {
      setGalaxyCardHTML(
        <article className="galaxy-card">
        <div className="galaxy-card-title">
          <h3 className="galaxy-name">{props.galaxyCardData.data[0].title}</h3>
        </div>
        <div className="card-info"><img className=".galaxy-image" src={props.galaxyCardData.links[0].href} alt=''/></div>
      </article>
      );
    }
  };

  return (
    <section className="generator">
      <GalaxyCard galaxyCardHTML={galaxyCardHTML} />

      <button onClick={APICall}>* GENERATE *</button>
    </section>
  );
};
export default Generator;
