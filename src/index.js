import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfilePage from "./pages/profilePage"
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Gallery from'./pages/gallery'
import Post from "./pages/posts"
import Todo from './pages/Todo';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/profilePage' element={<ProfilePage />} /> 
      <Route path='/profilepage/post' element={<Post />} /> 
      <Route path='/gallery' element={<Gallery />} /> 
      <Route path='/profilepage/todo' element={<Todo />} /> 
      
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>
);