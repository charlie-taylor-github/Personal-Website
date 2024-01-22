import React from 'react';


const ProjectPreview = (props) => {

  return (
    <div className='project-preview'>

      <div className='project-tags-and-date'>
        <p className='project-tags'>{props.tags}</p>
        <p className='project-date'>{props.date}</p>
      </div>

      <h2 className='project-title'>{props.title}</h2>

      <div className='project-links'>
        {props.links.view && (
          <a href={props?.links?.view} target="_blank">View</a>
        )}

        {props.links.github && (
          <a href={props?.links?.github} target="_blank">GitHub Repository</a>
        )}
      </div>

      <p className='project-description'>{props.description}</p>

      {
        props.testimonial && (
          <div className='testimonial'>
            <h2>Testimonial from {props.testimonial.title}:</h2>
            <p>
              "{props.testimonial.quote}"
            </p>
          </div>
        )
      }
    </div>
  );
}

export default ProjectPreview;
