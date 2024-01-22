import React, { useState } from 'react';

const LinksMenu = () => {
  const links = [
    {
      label: 'Email',
      value: 'dev.charlietaylor@gmail.com'
    },
    {
      label: 'GitHub',
      value: 'https://github.com/charlie-taylor-github/',
      type: 'url'
    },
    {
      label: 'Discord',
      value: '@charlie_taylor'
    },
    {
      label: 'Fiverr',
      value: 'https://www.fiverr.com/ctaylor_dev',
      type: 'url'
    }
  ];

  const [linkIndex, setLinkIndex] = useState(0);

  return (
    <>
      <div className='links-menu'>
        {
          links.map((l, i) => {
            if (linkIndex === i) {
              return (
                <div
                  key={i}
                  className='links-menu-item selected'
                >
                  <h3>{l.label}</h3>
                </div>
              );
            }
            return (
              <div
                key={i}
                className='links-menu-item'
                onClick={() => setLinkIndex(i)}
              >
                <h3>{l.label}</h3>
              </div>
            );

          })
        }
      </div >

      {
        linkIndex !== null && (
          links[linkIndex].type === 'url' ?
            <h3 id='link-value'>
              <a href={links[linkIndex].value}>
                {links[linkIndex].value}
              </a>
            </h3> :
            <h3 id='link-value'>
              {links[linkIndex].value}
            </h3>
        )
      }

    </>
  );
};

export default LinksMenu;
