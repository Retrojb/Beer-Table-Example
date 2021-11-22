import './App.css';
import BeerTable from './components/Tables/BeerTable.js';
import NavBar from './components/Shared/NavBar';
import ROUTES, { RenderRoutes } from './routes';
import { Outlet } from 'react-router';

function App() {
  console.log(ROUTES)
  return (
    <>
      <NavBar />
        <Outlet />
    </>
  );
}

export default App;

/* Notes
  React-Router v6 
    Outlet: presists parent route (app) and outlet handles child routes 

*/