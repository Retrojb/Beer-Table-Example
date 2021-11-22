import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TablePage from './pages/TablePage';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import BeerCard from './components/Cards/BeerCard';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />}>
          <Route path="home" element={ <Home /> } />
          <Route path="tables" element={ <TablePage />}>
            <Route path=":beerId" element={ <BeerCard /> }/>
          </Route>

          <Route path="*" element={ <PageNotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
