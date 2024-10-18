
import './App.css';
import React, { useState, useEffect, useMemo } from 'react';
import {BrowserRouter as Router, Route, Navigate,  Routes, useLocation, useRoutes} from "react-router-dom";

//import FlightHome from './FlightRelated/FlightHome';


//import DashboardLayout from './layouts';
import MyPage from './testpage';


const App  = () =>  { 


  const routes = useRoutes([

    {
      path: '/',
      element: <MyPage />
    }



  ]);


  return (
    <div>

        {routes}

    </div>
);
}

export default App;








/*import FlightList from './FlightRelated/FlightList';
import AccountHome from './account/accountHome/AccountHome';
import LoginScreen from "./account/LoginScreen";
import RegisterScreen from "./account/RegisterScreen";




const App  = () =>  { 
    
  var props = window.location.pathname
  function AddLogging({children}) {
  
    useEffect(() => {
  
    }, []);
  
    return <FlightHome {...children} {...props} hey = {window.location.pathname} />;
  }





  const routes = useRoutes([

    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '',
          element: <Navigate to="/flightlist" replace />,
        },
        {
          path: 'flight',
          element: <FlightHome/>,
          children: [
            {
              path: ':id' ,
              element:  <AddLogging></AddLogging>
            },

          ],
        },

        {
          path: 'flightlist' ,
          element:  <FlightList/>
        },
        {
          path: 'register' ,
          element:  <RegisterScreen/>
        },
        {
          path: 'login' ,
          element:  <LoginScreen/>
        },
        {
          element: <LoggedRoutes />,
          children: [          
              {
            path: 'YourAccount' ,
            element:  <AccountHome/>
          },]
        },

        {
          path: '404' ,
          element:  <Error/>
        },
        {
          path: '*',
          element: <Navigate to="/404" replace />,
        },
      ],
    },



  ]);



    return (
        <div>
          <AuthProvider>
            {routes}
          </AuthProvider>
        </div>
    );
}

export default App;*/


