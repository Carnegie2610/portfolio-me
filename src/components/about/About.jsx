import React from 'react'
import './about.css'
import moi from '../../assets/changer.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="Ronsard " />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>3 world widely</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>2 Completed</small>
              </article>
            </div>
            <p>
              I am a young software engineer trained at the Faculty of
              Engineering and Technology(FET) of the University of Buea. I will get
              my B.eng in 2025. Being on demand for experience, I apply to
              lab2view which accepted me and gave me the chance to work on real
              business projects in order to gain experience. From July 2022 to
              today, I learned technologies such as react, react native, in
              short the MERN stack, I am still learning and counting on the
              support of lab2view to increase my knowledge at end of being an
              engineer not only graduate, but also qualified. I am Bilingual
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
