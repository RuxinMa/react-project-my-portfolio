## Project Overview
This project is deployed on Netlify, [Click here to explore](https://ruxinma.netlify.app/)

### Technologies
React, JavaScript, Tailwind CSS,  HTML, Vite, Netlify

### Description
Create a responsive website for a personal portfolio, and the structure of the components are as follows:

```bash
src
│
├── assets/
└── components/
    ├── About/
    ├── Hero/
    ├── Projects/
    ├── Backgroud/
    ├── SectionTitle.jsx
    └── Navbar.jsx
```

## Version History

### v0.0  (01-2024)
Built the initial portfolio version, including Hero, Navbar, Project, and Skills sections. All sections are displayed in a vertical waterfall layout with basic interactions.

### v1.0  (08-2024)
Updated the portfolio layout and background, with the main changes as follows:

- Refactored code, separating sections into individual pages.
- Enhanced display and interactivity, adding background images and patterns.
- Redesigned the home and project pages for improved project presentation.

### v2.0  (11-2024)
Updated the About page by adding a timeline of experiences. Added a profile avatar to the navbar.


## Other Information

### Setup
```sh
yarn install
```

then

```sh
yarn vite
```

#### Setup Vite and Tailwind

[Tailwind Docs](https://tailwindcss.com/docs/guides/vite)

- setup vite project

```sh
npm create vite@latest my-project -- --template react
cd my-project
```

- add tailwind

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- rename to tailwind.config.cjs
- add following content

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Tailwind directives are instructions that decide how Tailwind CSS creates the styles for your website. They control the global styles, component styles, and utility classes.

- start the project "npm run dev"
- setup first tailwind classes in App.jsx


#### Install More Libraries

```sh
npm i nanoid react-icons
```

#### Useful Tailwind Extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold)

