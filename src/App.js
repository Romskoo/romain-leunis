import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

import Homepage from './pages/Homepage/Homepage';
import Header from './components/Header/Header';
import Introduction from './pages/Introduction/Introduction';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

const Layout = () => {
  return(
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  )
}

const LayoutNoFooter = () => {
  return(
    <>
      <Header/>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutNoFooter />,
    children: [
      { path: "/", element: <Introduction /> },
    ],
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      { path: "/home", element: <Homepage /> },
    ],
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
