# Sportiverse Website

**Sportiverse** is a modern blockchain-powered site designed for sports-related web applications. This project uses React for the client-side and an Express server to serve static files. It emphasizes efficiency, scalability, and a decentralized user experience.

## Table of Contents

- [Overview](#overview)
- [Litepaper](#litepaper)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Team](#team)
- [Contact](#contact)

## Overview

- **Purpose:** Showcasing the Sportiverse platform for decentralized sports applications.
- **Tech Stack:** React • Parcel • Express • Concepts inspired by Cosmos SDK.
- **Features:** Real-time updates, responsive design, and intuitive navigation.

## Litepaper
For a deep dive into Sportiverse's architecture and vision, read our [Litepaper](https://www.sportiverse.network/docs).

## Features

- **Decentralized Infrastructure:** Inspired by blockchain concepts, emphasizing autonomy.
- **Responsive UI:** Built with React, ensuring a smooth and interactive user experience.
- **Modern Build Process:** Utilizes Parcel for rapid development and deployment.
- **Express Server:** Manages routing and serves static files seamlessly.

## Project Structure

- **Root Directory:**
  - `package.json` – Contains project metadata, scripts, and dependencies.
  - `index.js` – Express server that serves your static files.
- **Client:**
  - `client/src/index.html` – Main HTML template.
  - `client/src/index.js` – React's entry point.
  - `client/src/index.css` – Global styles.
  - `client/src/components/` – React components:
    - `Home.js` – Home page component showcasing Sportiverse's vision.
    - `Contact.js` – Contact page.
    - `docs.js` – Documentation page.
    - `dapps.js` – Dapps showcase.
  - **Assets:**
    - Images in `client/src/imgs`
    - Videos in `client/src/videos`

## Installation

1. **Clone the Repository:**

   ````sh
   git clone <repository-url>
   cd sportiverse-website
   ````
2. **Install Dependencies:**

   ````sh
   npm install
   ````

### Development
Run the project in development mode (with live reloading):

````sh
   npm run dev
   ````

````Note: On Windows, ensure that the rm command in the "clean" script is replaced with rimraf to avoid errors.````

### Production
Build the client and start the server:
````sh
npm run start
````

Access the application at http://localhost:1234.

## Development Details
- **Client Build:** Parcel bundles your client-side code into `````client/dist````.
- **Server:** An Express server runs from `````index.js```` to serve the static files.
- **Hot Reload:** Nodemon watches for changes in server code for live updates.

## Team
- [**Daniel Augusto**](https://github.com/odanielaugusto) — Business Analyst
- [**Pedro Jorge**](https://github.com/PedroJorgeSA) — UI/UX Designer
- [**Victor Garcia**](https://github.com/CryptoVictor) — Blockchain Engineer
- [**João Pedro**](https://github.com/joaoaraujo2006) — FullStack Developer

##  Contact

For questions, partnerships or contributions, reach us at: [sportiverselabs@gmail.com](mailto:sportiverselabs@gmail.com)
