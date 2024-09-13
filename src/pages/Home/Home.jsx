import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Home
//<Outlet />
//you can use <Outlet /> to define where the child routes should be displayed
//When a user navigates to a child route, the content corresponding to that route will be rendered in place of the <Outlet />.




