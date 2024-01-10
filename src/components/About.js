import React from 'react'
import about from '../images/about.jpeg'

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>about <span>us</span></h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={about}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Travel Road è un'agenzia di viaggi che organizza viaggi in tutto il mondo. Nata nel 1970 dalla passione di due amici, Vittorio Kulczycki e Paolo Nugari, l'azienda si è sempre distinta per la qualità dei suoi itinerari e per la cura nella scelta delle destinazioni.
          </p>
          <p>
            Organizziamo viaggi in tutto il mondo, dalle destinazioni più classiche come l'Europa e l'America ai luoghi più esotici e incontaminati. Proponiamo itinerari per tutti i gusti e per tutte le esigenze, dai viaggi di gruppo ai viaggi individuali, dai viaggi culturali ai viaggi di avventura.
          </p>
          <a href="#about" className="btn">read more</a>
        </article>
      </div>
    </section>
  )
}

export default About