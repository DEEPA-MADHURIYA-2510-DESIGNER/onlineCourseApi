import React from 'react';
import { useLocation } from 'react-router-dom';

function CourseDetail() {

    const location = useLocation()
    const course = location.state.course;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h2>{`${course.instructor}`}</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlu-5sicFuHii8BAVf-lwWzS0D4bOJ00mHAQ&usqp=CAU" alt="Instructor image" className="img-fluid" />
                        <p>Instructor bio</p>
                    </div>
                    <div className="col-lg-9 col-md-6 col-sm-12">
                        <h1>{course.name}</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </p>
                        <p>Prerequisites:-{`${course.prerequisites}`}</p>
                    </div>
                    <div className="col-lg-12 my-3">
                        <h2>Course Details</h2>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Start date</td>
                                    <td>2023-10-10</td>
                                </tr>
                                <tr>
                                    <td>End date</td>
                                    <td>2023-12-12</td>
                                </tr>
                                <tr>
                                    <td>Duration</td>
                                    <td>{course.duration}</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>$99</td>
                                </tr>
                                <tr>
                                    <td>EnrollmentStatus</td>
                                    <td>{course.enrollmentStatus}</td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>{course.location}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseDetail;