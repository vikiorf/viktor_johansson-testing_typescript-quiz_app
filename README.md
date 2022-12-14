<a name="readme-top"></a>

# Requirements:

[Docs](./docs/README.md)

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

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Quiz</h3>

  <p align="center">
    Challenge yourself with a quiz for all ages!
    <br />
    <a href="https://github.com/vikiorf/viktor_johansson-testing_typescript-quiz_app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/vikiorf/viktor_johansson-testing_typescript-quiz_app">View Demo</a>
    ·
    <a href="https://github.com/vikiorf/viktor_johansson-testing_typescript-quiz_app/issues">Report Bug</a>
    ·
    <a href="https://github.com/vikiorf/viktor_johansson-testing_typescript-quiz_app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
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
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a school project for a course named `Typescript and testing`.
There were specific requirements to be met in this course, such as technical tools, languages, what type of project to build and how that app should behave.

I wanted to challenge myself and develop this project using pure TDD and clean code because I've been really inspired by [Uncle Bob's lecture.](https://www.youtube.com/playlist?list=PLmmYSbUCWJ4x1GO839azG_BBw8rkh-zOj)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![ts][typescript-badge]][typescript-url]
[![React][react.js]][react-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To start up the dev environment, execute the steps below.

### Prerequisites

The easiest way to setup your DEV-env is to use [docker.](https://docs.docker.com/get-docker/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/vikiorf/viktor_johansson-testing_typescript-quiz_app.git
   ```
2. Enter your port in `.env` in root.
   ```
   NGINX_PORT=8080
   ```
3. Start `docker compose`
   ```sh
   docker compose up
   ```

### With npm

1. Clone the repo
   ```sh
   git clone https://github.com/vikiorf/viktor_johansson-testing_typescript-quiz_app.git
   ```
2. Enter your port in `frontend/.env`
   ```
   VITE_TOTAL_AMOUNT_OF_ROUNDS=2
   VITE_QUESTION_TIME_IN_MS=4000
   VITE_TRIVIA_BASE_URL=https://the-trivia-api.com/api
   ```
3. Switch directory and start web server
   ```sh
   cd frontend
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/vikiorf/viktor_johansson-testing_typescript-quiz_app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Read our [workflow-doc](./docs/workFlow.md) and [style guide](./docs/styleGuide.md) and then start coding!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/vikiorf/viktor_johansson-testing_typescript-quiz_app](https://github.com/vikiorf/viktor_johansson-testing_typescript-quiz_app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Project scaffolded from [Xwudao / react-starter-template ](https://github.com/Xwudao/react-starter-template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/vikiorf/viktor_johansson-testing_typescript-quiz_app.svg?style=for-the-badge
[contributors-url]: https://github.com/vikiorf/viktor_johansson-testing_typescript-quiz_app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/vikiorf/viktor_johansson-testing_typescript-quiz_app.svg?style=for-the-badge
[forks-url]: https://github.com/vikiorf/viktor_johansson-testing_typescript-quiz_app/network/members
[stars-shield]: https://img.shields.io/github/stars/vikiorf/viktor_johansson-testing_typescript-quiz_app.svg?style=for-the-badge
[stars-url]: https://github.com/vikiorf/viktor_johansson-testing_typescript-quiz_app/stargazers
[issues-shield]: https://img.shields.io/github/issues/vikiorf/viktor_johansson-testing_typescript-quiz_app.svg?style=for-the-badge
[issues-url]: https://github.com/vikiorf/viktor_johansson-testing_typescript-quiz_app/issues
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[typescript-badge]: https://flat.badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555
[typescript-url]: https://www.typescriptlang.org/
