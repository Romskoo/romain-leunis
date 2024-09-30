import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import Homepage from './pages/Homepage/Homepage';
import Header from './components/Header/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
]);


function App() {
  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
