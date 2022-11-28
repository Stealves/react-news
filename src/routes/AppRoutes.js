import { Routes, Route } from "react-router-dom";
import { Article } from "../views/Article.js";
import { Category } from "../views/Category.js";
import { Home } from '../views/Home.js';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/:category' element={<Category />} />
      <Route path='/article' element={<Article />} />
    </Routes>
  )
}