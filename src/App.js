import './App.css';
import NavBar from './components/shared/NavBar';
import { Outlet } from 'react-router';
import Footer from './components/shared/Footer';
import { Container } from '@mui/material';
import Layout from './views/common/Layout';

function App() {

  return (
    <>
      <Layout>
          <Outlet />
      </Layout> 
    </>
  );
}

export default App;

/* Notes
  React-Router v6 
    Outlet: presists parent route (app) and outlet handles child routes 
    Layout takes the outlets as props 
*/