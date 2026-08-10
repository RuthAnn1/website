import React from 'react';
import '../styles/places.css';
import osloImg from '../photos/oslo.jpg';
import bergenImg from '../photos/bergen.jpg';
import lofoten from '../photos/lofoten.jpg';
import trondheimImg from '../photos/Trondheim.jpg';

export default function Places() {
  return (
    <div className="places">
      {/* Hero */}
      <section className="places-hero">
        <h1>Places to Go</h1>
        <p>
          Destinations that highlight nature, culture, and everyday life.
        </p>
      </section>

      {/* Featured */}
      <section className="places-featured">
        <img src={osloImg} alt="Oslo" className="featured-image" />
        <div className="featured-content">
          <h2 className='change-color'>Oslo</h2>
          <p className='change-color'>
            A city where modern design meets forests, fjords, and a slower pace
            of living.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="places-grid">
        <div className="place-card">
          <img src={bergenImg} alt="Bergen" className="card-image" />
          <h3>Bergen</h3>
          <p>Historic harbor city surrounded by mountains and rain.</p>
        </div>

        <div className="place-card">
          <img src={lofoten} alt="Lofoten" className="card-image" />
          <h3>Lofoten</h3>
          <p>Dramatic peaks, fishing villages, and northern lights.</p>
        </div>

        <div className="place-card">
          <img src={trondheimImg} alt="Trondheim" className="card-image" />
          <h3>Trondheim</h3>
          <p>A cozy student city with deep Viking history.</p>
        </div>
      </section>
    </div>
    
  );
}