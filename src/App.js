import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Header/Header';
import Course from './Component/Courses/Course';
import CourseDetail from './Component/CourseDetail/CourseDetail';
import User from './Component/Users/User';
import Studentadmin from './Component/Studentadmin/Studentadmin';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Course' element={<Course />} />
          <Route path='/Course/:id' element={<CourseDetail/>} />
          <Route path='/User' element={<User />} />
          <Route path='/Studentadmin/:name' element={<Studentadmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
