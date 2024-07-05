import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
 
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/home';
import { Detail } from './pages/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/detail', element: <Detail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
