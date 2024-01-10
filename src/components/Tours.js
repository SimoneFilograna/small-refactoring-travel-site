import React from 'react';
import { tours } from '../data';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div>

      <div className="section-center featured-center">

        {/* itering tours */}
        {tours.map((tour)=> {
          const {id, img, date, name, state, text, timeTravel, price} = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{name}</h4>
                </div>
                <p>
                  {text}
                </p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> {state}
                  </p>
                  <p>{timeTravel}</p>
                  <p>from {price}</p>
                </div>
              </div>
            </article>
          )
        })}      
      </div>
    </section>
  )
}

export default Tours