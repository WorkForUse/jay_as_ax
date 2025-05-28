import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import PostIdPage from './pages/PostIdPage';
import ErrorPage from './pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true, // homepage at '/'
        Component: Homepage,
        loader:async()=>{
          const response = await((await fetch('https://jsonplaceholder.typicode.com/todos')).json());
          return response
        }
      },
      {
        path: 'about',
        Component: Aboutpage,
        action:async({request})=>{
          const formData = await request.formData();
          return formData.get("title");
        }
      },
      {
        path: 'contact',
        Component: Contactpage,
      },
      {
        path: 'post/:id',
        Component:PostIdPage,
      },
      {
        path: 'post/:id?', // this question mark use for default or say optional params 
        Component:PostIdPage,
      }
    ],
  },
  {
    path:'*',
    Component:ErrorPage,
  }
]);
