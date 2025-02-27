import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

import Homepage from './pages/Homepage/Homepage';
import Header from './components/Header/Header';
import Introduction from './pages/Introduction/Introduction';
import Menu from './components/Menu/Menu';

const Layout = () => {
  return(
    <>
      <Header/>
      <Outlet />
    </>
  )
}
const router = createBrowserRouter([
  
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Introduction/>,},
      { path: "/home", element: <Homepage /> },
    ],
  },
]);


function App() {
  return (
    <div className="App" data-the>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
