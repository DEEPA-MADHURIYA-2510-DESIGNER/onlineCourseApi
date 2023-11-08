import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Course = () => {
    async function fetchCourse() {
        const response = await fetch('https://mocki.io/v1/99ae5020-5618-465d-991d-1864c8ac9290');
        const json = await response.json();
        return json;
    }

    const [Courses, SetCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const json = await fetchCourse();
            SetCourses(json);
        };
        fetchCourses();
    }, []);

    const courseCards = Courses.map((course) => {
        return (
            <div className="col-lg-3 col-md-6 col-sm-12" key={course.id}>
                <div className="card" style={{ width: "18rem", margin: "2vmax" }}>
                    <div className="card-body">
                        <h5 className="card-title">{course.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{course.instructor}</h6>
                        <p className="card-text">{course.description}</p>
                        <Link to={{ pathname: `/Course/:${course.id}`}} state={{course}} className="btn btn-primary">Course Details</Link>
                    </div>
                </div>
            </div>
        );
    });


    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {courseCards}
                </div>
            </div>
        </>
    )
}

export default Course;