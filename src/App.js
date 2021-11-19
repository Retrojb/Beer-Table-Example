import './App.css';
import BeerTable from './components/Tables/BeerTable.js';
import NavBar from './components/Shared/NavBar';
import ROUTES, { RenderRoutes } from './routes';

function App() {

  return (
    <div className="App">
      <NavBar />
        <RenderRoutes routes={ROUTES} />
      <BeerTable />
    </div>
  );
}

export default App;
