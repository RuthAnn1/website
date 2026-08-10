import React from 'react';
import '../styles/sites.css';
import geirangerfjordImg from '../photos/Geirangerfjord.jpg';
import lofotenImg from '../photos/lofoten.jpg';
import bryggenImg from '../photos/bergen.jpg';
import preikestolenImg from '../photos/Preikestolen.jpg';
import operaImg from '../photos/OsloOperaHouse.jpg';
import tromsoImg from '../photos/Tromsø.jpg';

const sites = [
  {
    name: "Geirangerfjord",
    img: geirangerfjordImg,
    description:
      "A UNESCO World Heritage fjord known for its deep blue waters, waterfalls, and steep mountain cliffs."
  },
  {
    name: "Lofoten Islands",
    img: lofotenImg,
    description:
      "A dramatic archipelago with sharp peaks, fishing villages, and some of Norway’s most photographed scenery."
  },
  {
    name: "Bryggen, Bergen",
    img: bryggenImg,
    description:
      "Historic wooden buildings from the Hanseatic era that tell the story of Bergen’s trading past."
  },
  {
    name: "Preikestolen",
    img: preikestolenImg,
    description:
      "A famous cliff rising over Lysefjord, offering one of Norway’s most iconic hiking views."
  },
  {
    name: "Oslo Opera House",
    img: operaImg,
    description:
      "A modern architectural landmark where visitors can walk on the roof overlooking the Oslo Fjord."
  },
  {
    name: "Tromsø",
    img: tromsoImg,
    description:
      "Known as the gateway to the Arctic, perfect for Northern Lights, midnight sun, and Sami culture."
  }
];

export default function Sites() {
  return (
    <main className="sites-page">
      {/* Hero Section */}
      <section className="sites-hero">
        <h1>Famous Sites of Norway</h1>
        <p>Explore some of Norway’s most meaningful and breathtaking places, from natural wonders to cultural landmarks.</p>
      </section>

      {/* Flip Cards Grid */}
      <section className="sites-grid">
        {sites.map((site, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="image-placeholder">
                  <img src={site.img} alt={site.name} className="site-image"/>
                </div>
                <h2>{site.name}</h2>
              </div>

              <div className="flip-card-back">
                <h2>{site.name}</h2>
                <p>{site.description}</p>
              </div>
            </div>
          </div>
        ))}
       
      </section>

    </main>
  );
}


