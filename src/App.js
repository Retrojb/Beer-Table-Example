import './App.css';
import BeerTable from './components/Tables/BeerTable.js';
import NavBar from './components/Shared/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar />
      <BeerTable />
    </div>
  );
}

export default App;
