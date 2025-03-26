import './App.css';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

import Homepage from './pages/Homepage/Homepage';
import Header from './components/Header/Header';
import Introduction from './pages/Introduction/Introduction';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';

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
      { path: "/", element: <Introduction /> },
      { path: "/home", element: <Homepage /> },
      { path: "/project", element: <ProjectDetail /> },
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
