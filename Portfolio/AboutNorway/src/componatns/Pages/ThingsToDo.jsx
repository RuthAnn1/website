import React from 'react';
import '../styles/things.css';
import northernLightsImg from '../photos/Northern_lights.jpg';
import fjordImg from '../photos/Fjord.jpg';
import hikingImg from '../photos/Hiking.jpg';
function ImageArea({ title, imgSrc, description }) {
  return (
    <div className="image-area">
      <img src={imgSrc} alt={title} />
      <div className="image-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

const thingsToDo = [
  { name: "Fjord Cruises", img: fjordImg, description: "Experience Norway's stunning fjords up close..." },
  { name: "Northern Lights Tours", img: northernLightsImg, description: "Join a tour to witness the magical Aurora..." },
  { name: "Hiking Adventures", img: hikingImg, description: "Explore Norway's diverse trails..." },
];

export default function ThingsToDo() {
  return (
    <main className="things-page" style={{ padding: '2rem' }}>
      <h2>Things to Do</h2>
      <p>Activities, tours, and experiences to try.</p>
      <section>
        {thingsToDo.map((thing, index) => (
          <ImageArea
            key={index}
            title={thing.name}
            imgSrc={thing.img}
            description={thing.description}
          />
        ))}
      </section>
    </main>
  );
}
