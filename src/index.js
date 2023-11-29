import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import { reviewLoader, shopLoader } from './Loaders';
import ReviewCartSection from './components/ReviewCartSection/ReviewCartSection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'shop',
        element: <Shop></Shop>,
        loader: shopLoader,
      },
      {
        path: 'review',
        element: <ReviewCartSection></ReviewCartSection>,
        loader: reviewLoader,
      },
      {
        path: 'login',
        element: <p>This is Login</p>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
