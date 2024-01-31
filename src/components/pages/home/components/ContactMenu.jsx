import { useState } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const contactOptions = [
  {
    icon: EmailOutlinedIcon,
    value: 'dev.charlietaylor@gmail.com',
    link: 'mailto:dev.charlietaylor@gmail.com'
  },
  {
    icon: GitHubIcon,
    value: 'https://github.com/charlie-taylor-github/',
    link: 'https://github.com/charlie-taylor-github/'
  },
  {
    icon: LinkedInIcon,
    value: 'https://www.linkedin.com/in/charlie-taylor-dev/',
    link: 'https://www.linkedin.com/in/charlie-taylor-dev/'
  },
  {
    label: 'discord',
    value: 'charlie_taylor'
  }
];

const ContactMenu = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div id='contact-button'
        onClick={() => setModalActive(true)}
      >
        <h3>Contact Me</h3>
      </div>

      <div id='contact-modal'
        className={modalActive ? 'active' : ''}
      >

        <h3>Contact Me</h3>

        {contactOptions.map((c, i) => (
          <div className='contact-section' key={i}>
            <a href={c.link ? c.link : '#'} target={c.link && '_blank'}>
              {c.icon && (
                <c.icon className='contact-icon' />
              )}

              {c.label && (
                <h3 className='contact-label'>{c.label}</h3>
              )}

              <input
                type='text'
                readOnly={true}
                value={c.value}
              />
            </a>
          </div>
        ))}

      </div>
      <div id='contact-modal-overlay'
        className={modalActive ? 'active' : ''}
        onClick={() => setModalActive(false)}
      ></div>
    </>
  );
}

export default ContactMenu;
