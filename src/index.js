import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BooksContainer from './components/BooksContainer';
import Categories from './pages/Categories';
import App from './App';
import rootReducer from './redux/configureStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={rootReducer}>
        <App />
        <Routes>
          <Route path="/" element={<BooksContainer />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Provider>
      ,
    </React.StrictMode>
  </BrowserRouter>,
);
