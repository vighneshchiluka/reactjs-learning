import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Product from "./pages/Product.jsx";
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import Kids from './pages/Kids.jsx'
import Courses from "./pages/Courses.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/* -------------nested-routes----------- */}
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>

        {/* ------------dynamic-routing------------- */}

        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:courseId" element={<CourseDetail/>}/>

        {/* ----------unknown-route-page------------ */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
