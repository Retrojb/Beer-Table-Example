## How I built the project

    - Generated a new React project using `npx create-react-app`
    - Added required react dependencies using NPM: 
        - Axios `npm install axios`
            (Axios HTTP)[https://axios-http.com/docs/intro]
        - Material UI `npm install @mui/material @emotion/react @emotion/styled @mui/icons-material`
            (MUI)[https://mui.com/components]
        - React Router v6 `npm install react-router` 
            (React Router Doc)[https://reactrouter.com/docs/en/v6/api]
        - React Testing Library `npm install --save-dev @testing-library/react`
            (React Testing Lib)[https://testing-library.com/docs/react-testing-library/intro/]
        
    Index.js changes:
        - Removed 'Strict Mode', will add back later once Router is working
        - Wrapped the `<App />` in a `<BrowserRouter>`
            - May add force refresh, due to issues with table data, not refreshing on certain changes
                probably an issue with how I am passing the data
    Set up API
        Using Axios GET method to fetch data from endpoint `https://api.punkapi.com/v2/beers?per_page=80`
        Check that the response status is 200 and return just the data of the call

    Project Todos:
        [] Beer Pic display in table h:60px w:50px
        [] Add page not found / 404 Page
        [] Condense Description to 2 lines
            [] On hover or expand display the rest
        [] Set up NavBar
            [] Add Nav menu routing
        [] Fix sort button to rotate on desc / asc
        [] Fix Filter to filter by
            [] if has lactose
            [] if has dry hops (added at the end of brewing)
            [] filter by beer type (lager, porter, IPA...)
        [] Add Search
        [X] Add Table Pagination
        [X] Add Table Filter
        [] Add Table Toolbar
            [] Move Filter in toolbar
            [] Move Search in toolbar
        [] Add Redux Store (differnt branch)
            [] decouple API calls from pages
        [] Make a table using MUI datagrid
        [] Find more beer APIs
        [] App Header
        [] App Footer
        [] Add tests
            [] Axios API test
            [] Sort test
            [] Filter test
            [] Router Test
        [] Check responsiveness
        [] Fix Styling
        [] Add Darkmode Toggle
        [] Make a Beer card list
        [] Beer Card pops up on clicking a row
            [] Click off Listner
            [] Card Layout
                [] Beer Name as Card Title
                [] Beer Pic
                [] Beer Type, ABV and IBU
                [] Expanded for description
                [] Expanded for other ingredients
        [] Count Down to beer timer on Home Page
            [] Allow user to set a time to have a beer
        [] Add some animation
        [] Add some loading pages
