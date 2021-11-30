import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TablePage from './views/tables/TablePage';
import Home from './views/Home';
import PageNotFound from './views/common/PageNotFound';
import BeerCard from './components/cards/BeerCard';
import BeerDataGrid from './components/tables/BeerDataGrid';
import Login from './views/common/Login';
import Profile from './views/Profile';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
              <Route path="/app" element={<App />}>
                  <Route path="profile" element={ <Profile />} />
                <Route path="login" element={ <Login /> }>
                </Route>
                <Route path="home" element={ <Home /> } />
                <Route path="tables" element={ <TablePage />}>
                  <Route path=":beerId" element={ <BeerCard /> }/>
                </Route>
                <Route path="beer-datagrid" element={ <BeerDataGrid /> } />
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
