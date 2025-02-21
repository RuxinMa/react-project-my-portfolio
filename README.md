## Project Overview
This project is deployed on Netlify, [Click here to explore!!](https://ruxinma.netlify.app/)

### Technologies
React, JavaScript, Tailwind CSS,  HTML, Vite, Netlify

### Description
Create a responsive website for a personal portfolio, and the structure of the components are as follows:

```bash
src
├── assets/
└── components/
    ├── About/
    ├── Hero/
    ├── Projects/
    ├── Backgroud/
    ├── SectionTitle.jsx
    └── Navbar.jsx
    └── Error.jsx
```

## Version History

### v3.0 (February 2025)
Enhanced user experience through:
- Added lazy loading for better performance
- Implemented error handling and error pages

### v2.0 (November 2024)
Enhanced personal presentation and user interface:
- Added interactive timeline on About page
- Integrated profile avatar in navigation bar

### v1.0 (August 2024)
Major architectural and design overhaul:
- Refactored code into separate pages
- Updated layout and background design
- Redesigned home and project pages for better project showcase

### v0.0 (January 2024)
Initial portfolio release:
- Created core sections: Hero, Navbar, Projects, and Skills
- Implemented basic vertical waterfall layout



## Other Information

### Setup
```sh
yarn install
```

then

```sh
yarn vite
```

#### Setup Vite and Tailwind [Tailwind Docs](https://tailwindcss.com/docs/guides/vite)

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

