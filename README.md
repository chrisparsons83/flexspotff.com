<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/chrisparsons83/flexspotff.com">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">FlexSpot Fantasy Community</h3>

  <p align="center">
    Website for FlexSpot Fantasy Community.
    <br />
    <a href="https://github.com/chrisparsons83/flexspotff.com"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/chrisparsons83/flexspotff.com">View Demo</a>
    ·
    <a href="https://github.com/chrisparsons83/flexspotff.com/issues">Report Bug</a>
    ·
    <a href="https://github.com/chrisparsons83/flexspotff.com/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is the website for the FlexSpot Fantasy Football community.

### Built With

- [Fastify](https://www.fastify.io/)
- [MikroORM](https://www.mikro-orm.io/)
- [NextJS](https://nextjs.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node >= v14
- Some sort of database, preferably postgres.
- Optional: docker and docker-compose. This sets up postgres for you currently.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/chrisparsons83/flexspotff.com.git
   ```
2. Switch to working directory, and install NPM packages for both frontend and backend. (This probably should be wrapped in an npm script)
   ```sh
   npm install
   npm run install:frontend
   npm run install:graphql
   ```
3. Run the database. You can get a sql dump and put it in .db-load before running.
   ```sh
   docker-compose -d up
   ```
4. Set your environmental variables. For dev, you'll likely just want to use the .env setup.
   ```sh
   cp ./graphql/.env.sample ./graphql/.env
   ```
   - Update the following variables when you make this copy:
     - DISCORD_CLIENT_ID
     - DISCORD_CLIENT_SECRET
     - FASTIFY_COOKIE_KEY: any random string
     - JWT_KEY: any other random string
5. If you want to start from a clean database, you can run migrate:up using Mikro ORM.
   ```sh
   cd backend
   npx mikro-orm migration:up
   ```
6. To run the front end website:
   ```sh
   cd frontend && npm run dev
   ```
7. To run the backend GraphQL server:
   ```sh
   cd graphql && npm run dev
   ```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Chris Parsons - [Personal Website](https://www.chris-parsons.com)

Project Link: [https://github.com/chrisparsons83/flexspotff.com](https://github.com/chrisparsons83/flexspotff.com)

<!-- ACKNOWLEDGEMENTS -->

<!-- ## Acknowledgements

- []()
- []()
- []() -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/chrisparsons83/flexspotff.com.svg?style=for-the-badge
[contributors-url]: https://github.com/chrisparsons83/flexspotff.com/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/chrisparsons83/flexspotff.com.svg?style=for-the-badge
[forks-url]: https://github.com/chrisparsons83/flexspotff.com/network/members
[stars-shield]: https://img.shields.io/github/stars/chrisparsons83/flexspotff.com.svg?style=for-the-badge
[stars-url]: https://github.com/chrisparsons83/flexspotff.com/stargazers
[issues-shield]: https://img.shields.io/github/issues/chrisparsons83/flexspotff.com.svg?style=for-the-badge
[issues-url]: https://github.com/chrisparsons83/flexspotff.com/issues
[license-shield]: https://img.shields.io/github/license/chrisparsons83/flexspotff.com.svg?style=for-the-badge
[license-url]: https://github.com/chrisparsons83/flexspotff.com/blob/master/LICENSE.md
