import React from 'react';

import Codes from '../Codes/Codes';
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout';
import Members from '../Members/Members';
import Prints from '../Prints/Prints';
import Reports from '../Reports/Reports';
import Services from '../Services/Services';
import Notfound from '../Notfound/Notfound';


import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Other from '../Members/Other';
import Family from '../Members/Family';
import MemberDetails from '../Members/MemberDetails';


export default function App() {

    const routes = createBrowserRouter([
        {path:'/' , element:<Layout/> , children:[
            
            // { , element:<Members/>} , 
            {path:'/' , element:<Members/> , children:[
                {path:'other' , element:<Other/>},
                {path:'family' , element:<Family/>},
              ]} , 
              
              
              
              {path:'memberdetails/:id' , element:<MemberDetails/>},
            {path:'codes' , element:<Codes/>},
            {path:'prints' , element:<Prints/>},
            {path:'reports' , element:<Reports/>},
            {path:'services' , element:<Services/>},
            {path:'footer' , element:<Footer/>},
            {path:'*' , element:<Notfound/>},
        ]}
    ])


  return (
    <>
    <RouterProvider router={routes}>

    </RouterProvider>
    
    </>
  )
}
