import React, { useEffect, useState } from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';

const Home = () => {
    async function fetchCourse() {
        const response = await fetch('https://mocki.io/v1/99ae5020-5618-465d-991d-1864c8ac9290');
        const json = await response.json();
        return json;
    }

    async function fetchStudent() {
        const response = await fetch('https://mocki.io/v1/237ab6ab-3254-4128-9467-92ffb8e3ff24');
        const json1 = await response.json();
        return json1;
    }

    const [value, SetValue] = useState("Course");
    const [Courses, SetCourses] = useState([]);
    const [Students, SetStudents] = useState([]);
    function Display() {
        if (value === "Course") {
            SetValue("Student");
        } else {
            SetValue("Course");
        }
    }

    useEffect(() => {
        const fetchCourses = async () => {
            const json = await fetchCourse();
            SetCourses(json);
        };
        fetchCourses();
        const fetchStudents = async () => {
            const json1 = await fetchStudent();
            SetStudents(json1);
        };
        fetchStudents();
    }, []);

    const courseCards = Courses.map((course) => {
        return (
            <div className="col-lg-3 col-md-6 col-sm-12" key={course.id}>
                <div className="card" style={{ width: "18rem", margin: "5px" }}>
                    <div className="card-body">
                        <h5 className="card-title">{course.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{course.instructor}</h6>
                        <p className="card-text">{course.description}</p>
                    </div>
                </div>
            </div>
        );
    });

    const StudentCards = Students.map((student) => {
        return (
            <div className="col-lg-3 col-md-6 col-sm-12" key={student.id}>
                <div className="card" style={{ width: "18rem", margin: "5px" }}>
                    <img src={student.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{student.name}</h5>
                        <p className="card-text">{student.Address}</p>
                        <Link to={{pathname: `/Studentadmin/:${student.name}`}} state={{student}} className="btn btn-primary">{`${student.name} - Dashboard`}</Link>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <>
            <button className={`btn1-${value} btn1`} onClick={() => Display()}>{`${value}`}</button>
            {/* For Courses */}
            {(value === "Course") && <div className="container">
                <div className="row">
                    {courseCards}
                </div>
            </div>}

            {/* For Student */}
            {(value === "Student") && <div className="container">
                <div className="row">
                    {StudentCards}
                </div>
            </div>}
        </>
    )
}

export default Home;