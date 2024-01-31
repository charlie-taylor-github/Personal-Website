import React from 'react';
import '../../../styles/pages/home/home.scss';

import ProjectPreview from './components/ProjectPreview';
import projects from "../../../projects.js";
import ContactMenu from './components/ContactMenu.jsx';

const HomePage = () => {
  return (
    <>
      <img
        src='/assets/images/profile.png'
        alt='profile picture'
        id='profile-picture'
      />
      <h1 id='title'>Hey, I'm Charlie Taylor</h1>
      <h3 id='subtitle'>A software engineer from London</h3>

      <ContactMenu />
      <hr />

      <h1 className='heading'>
        Portfolio
      </h1>

      {
        projects.map((p, i) => (
          <ProjectPreview
            key={i}
            title={p.title}
            description={p.description}
            tags={p.tags}
            date={p.date}
            testimonial={p.testimonial}
            links={p.links}
          />
        ))
      }
    </>
  );
};

export default HomePage;
