import React from 'react';
import '../../../styles/pages/home/home.scss';

import LinksMenu from './components/LinksMenu';
import ProjectPreview from './components/ProjectPreview';

import projects from "../../../projects.js";

const HomePage = () => {
  return (
    <>
      <LinksMenu />

      <hr />

      <img
        src='/assets/images/profile.png'
        alt='profile picture'
        id='profile-picture'
      />
      <h1 id='title'>Hey, I'm Charlie Taylor</h1>
      <h3 id='subtitle'>A software engineer from London</h3>

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
