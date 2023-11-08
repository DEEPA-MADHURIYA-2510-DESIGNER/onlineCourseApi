import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    async function fetchStudent() {
        const response = await fetch('https://mocki.io/v1/237ab6ab-3254-4128-9467-92ffb8e3ff24');
        const json1 = await response.json();
        return json1;
    }
    const [Students, SetStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const json1 = await fetchStudent();
            SetStudents(json1);
        };
        fetchStudents();
    }, []);

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
            <div className="container">
                <div className="row">
                    {StudentCards}
                </div>
            </div>
        </>
    )
}

export default User;