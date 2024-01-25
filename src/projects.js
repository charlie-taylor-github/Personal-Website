const template = {
  title: '',
  date: '',
  tags: '',
  description: '',
  testimonial: {
    title: '',
    quote: ''
  },
  links: {
    view: '',
    github: ''
  }
};

export default [
  {
    title: 'Optimal Plane-Boarding Strategies: An Agent-Based Simulation Project',
    date: 'April 2023',
    tags: 'JavaScript, Simulation, HTML, CSS, Bootstrap',
    description: `This project features an Agent-Based Model (ABM) simulation and visualizer,
      specifically engineered to assess and enhance the efficiency
      of various commercial plane boarding methods.`,
    testimonial: {
      title: 'pogoying',
      quote: `Charlie was extremely responsive and accommodating with the assigned project!
      [Lovely] to communicate with and will work with him again if needed`
    },
    links: {
      view: 'https://charlie-taylor-github.github.io/Plane-Boarding-Methods-Simulation/',
      github: 'https://github.com/charlie-taylor-github/Plane-Boarding-Methods-Simulation'
    }
  },
  {
    title: 'Python Console 2048 Game',
    date: 'August 2023',
    tags: 'Python, Game',
    description: 'A clone of the classic game 2048, where you move tiles in four directions on a grid. Users have the option to vary the size of the board. Use the W, A, S, and D keys, then press Enter to move.',
    links: {
      github: 'https://github.com/charlie-taylor-github/Python-Console-2048-Game'
    }
  },
  {
    title: 'Spinner - Entry for the 2021 GTMK Game Jam',
    date: 'June 2021',
    tags: 'Unity, Game, C#',
    description: `A Unity game developed for the 2021 GMTK Game Jam, themed 'Joined Together'. 
      In this game, you control two spikes connected by a string, with one spike constantly orbiting the other. 
      Players must click at the right moment to navigate and score points. 
      The game ranked #1380 out of 5674 entries.`,
    links: {
      view: 'https://itch.io/jam/gmtk-2021/rate/1084571'
    }
  },
  {
    title: 'ProductGem',
    date: 'December 2023',
    tags: 'Web Application, E-commerce, Node.js, Express, JavaScript, HTML, CSS, Stripe',
    description: `ProductGem is a SaaS platform designed for e-commerce sellers. 
      It offers a monthly subscription service providing access to a curated list of promising products to sell, handpicked by administrators. 
      The platform features email verification and a password reset system. 
      Payments are managed through Stripe integration. This active and successful service is currently in use by numerous e-commerce professionals.`,
    links: {
      view: 'https://productgem.co/'
    }
  },
  {
    title: 'Discord Bot: AQW Item Web-scraper',
    date: 'December 2023',
    tags: 'Node.js, Discord.js, Web-Scraping, Discord Bot',
    description: `A Discord bot, built for a client who runs an ‘Adventure Quest Worlds’ themed Discord server. 
      It allows users to search for items in the game, from inside Discord. 
      Users can filter items by gender, category and tag. 
      The bot web-scrapes the relevant item information from the game’s official wiki page. 
      It then displays the items in a Discord embed that users can interact with to iterate through the results.`,
    links: {
      view: 'https://discord.com/api/oauth2/authorize?client_id=1187399639532576909&permissions=8&scope=bot',
      github: 'https://github.com/charlie-taylor-github/AQW-Web-Scrape-Bot'
    }
  }
];
