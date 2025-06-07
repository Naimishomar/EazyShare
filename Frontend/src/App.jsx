import React from 'react'
import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import {Toaster} from 'sonner';
import Home from './components/Home';
import Layout from './components/Layout';
import PostContent from './components/PostContent';
import GetContent from './components/GetContent';
import NotFound from './components/ui/NotFound'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/share' element={<PostContent/>}/>
        <Route path='/get/:id' element={<GetContent/>}/>
      </Route>
    )
  )
  return (
    <>
      <div>
        <RouterProvider router = {router}/>
        <Toaster/>
      </div>
    </>
  )
}

export default App
