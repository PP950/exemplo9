import React from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App';
import Error from './src/routes/Error/Error';
import Home from './src/routes/Home/Home';


const router = createBrowserRouter([{
    path:'/', element:<App/>,
    errorElement:<Error/>,

    children:[
        {path:'/', element:<Home/>},
        {path:'/produtos', element:<Produtos/>},
    ]

}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
