# [Building a Frontend Dashboard App with Backend Graph Integration](https://dashboard-app-chakr.vercel.app/)

## Deployed Links
1. [FRONTEND](https://dashboard-app-chakr.vercel.app/) is deployed on [Vercel](https://vercel.com/).
2. [BACKEND](https://dashboard-backend-k0la.onrender.com/) is deployed on [render](https://render.com/).

<hr/>

### Objective: 
Build a complex web app, and design a user-friendly UI based on provided Figma design. 

### Additional Features
1. Design is Responsive for all tablet, mobile and desktop. (as shown in third picture onwards)
2. Downsampling has been done on the basis of month and year both.
3. Sidebar can be collapsed on click and vice-versa. (as shown in third picture)

### Screenshots are attached below.
#### Picture 1
![image](https://github.com/alhad-balak/dashboard-app/assets/84512702/bf778051-f2fd-4076-99a9-144aa93520a6)
#### Picture 2
![image](https://github.com/alhad-balak/dashboard-app/assets/84512702/2db794bf-7535-4047-bc02-d620dd36cd05)
#### Picture 3 (Tablet View & Collapsed Sidebar)
![New Project (2)](https://github.com/alhad-balak/dashboard-app/assets/84512702/30db28b3-ee3a-4997-b718-5f6a7bff1328)
#### Picture 4.1 (Mobile View)
![New Project](https://github.com/alhad-balak/dashboard-app/assets/84512702/fb2d254b-f27a-4007-b1bf-191aa707a2a9)
#### Picture 4.1 (Mobile View)
![New Project (1)](https://github.com/alhad-balak/dashboard-app/assets/84512702/1d0ca4f0-f68a-4406-8bb1-ecc45f7ae487)


### Requirements: 
1. Frontend: ReactJs/NextJs and Backend: Java/Python/Golang/Nodejs
2. Design the app's UI based on the Figma design which can be found [here](https://www.figma.com/file/UQrB8wfkcfmUXgMizFopFG/Full-Dashboard-for-Full-Stack-Hiring?type=design&node-id=0%3A1&mode=design&t=C1C5BflWs1of2CUL-1).
3. Entire UI should be static except Graph Component (Heading name: Growth). Ensure that the complete UI (except Graph) closely resembles the Figma design in terms of layout, colors, fonts, and components.
4. Implement of Graph Component: The graph should represent the relationship between profit percentage and time from a large dataset which can be found [here](https://drive.google.com/file/d/17pCww_k-dz_6ItCT-RSc1eBbHGx9i_N9/view). The dataset comprises two columns: Timestamp and corresponding Profit Percentage, with a total of 69,681 rows. The plotted graph should be an interactive one. Also, Due to the dataset's size, plotting all data points directly onto a single graph may lead to 
performance issues. Hence, an efficient downsampling algorithm is necessary to reduce the dataset while preserving essential trends. You should implement a downsampling algorithm (do not use any library) to reduce the dataset size while retaining critical trends and patterns.
5. Your web app should be deployed on Vercel / Netlify / fly.io / render.com / any other. 
6. Bonus (Optional): Responsiveness of design. 

## .env file

This file contains various environment variables that you can configure.

## Folder Structure

```
 .
 ├── package.json
 ├── postcss.config.js
 ├── public
 │   ├── assets
 │   │   └── images --------- All Project Images
 │   ├── favicon.ico
 │   ├── index.html
 │   ├── manifest.json
 │   └── robots.txt
 ├── README.md
 ├── src
 │   ├── App.jsx
 │   ├── assets
 │   │   └── fonts ---------- Project fonts
 │   ├── components --------- UI and Detected Common Components
 │   ├── constants ---------- Project constants
 │   ├── index.jsx
 │   ├── pages -------------- All route pages
 │   ├── Routes.jsx ---------- Routing
 │   ├── styles
 │   │   ├── index.css ------ Other Global Styles
 │   │   └── tailwind.css --- Default Tailwind modules
 │   └── util
 │       └── index.jsx ------- Helpful utils
 └── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```

<hr/>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
