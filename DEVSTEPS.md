## How I built the project

    - generated a new React project using `npx create-react-app`
    - Added required react dependencies using NPM: 
        - Axios `npm install axios`
        - Material UI `npm install @mui/material @emotion/react @emotion/styled`
        - React Router `npm install react-router`
        - React Testing Library `npm install --save-dev @testing-library/react`
        

    Set up API
        Using Axios GET method to fetch data from endpoint `https://api.punkapi.com/v2/beers?per_page=80`
        Check that the response status is 200 and return just the data of the call

