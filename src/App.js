import './App.css';
import NavBar from './components/shared/NavBar';
import ROUTES, { RenderRoutes } from './routes';
import { Outlet } from 'react-router';
import Footer from './components/shared/Footer';

function App() {
  console.log(ROUTES)
  return (
    <>
      <NavBar />
        <Outlet />
      <Footer />
    </>
  );
}

export default App;

/* Notes
  React-Router v6 
    Outlet: presists parent route (app) and outlet handles child routes 

*/