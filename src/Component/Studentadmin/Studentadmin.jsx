import React from 'react';
import { useLocation } from 'react-router-dom';

const Studentadmin = () => {
  const location = useLocation()
  const student = location.state.student;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <h5 className='d-flex justify-content-start'>{`${student.name}-Dashboard`}</h5>
            <div className="card" style={{ width: "18rem" }}>
              <img src={student.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <h6 className="card-title">{student.gender}</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <h5>{`Introduction`}</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.
            </p>
            <p>Course:-{`Introduction of Html, Introduction of video Editing, How to learn Graphic desinging`}</p>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
          <h6 className='card-title my-3'>Course Tracker</h6>
          <h6 className='d-flex justify-content-start'>{`Introduction of Html`}</h6>
            <div className="progress my-2">
              <div className="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h6 className='d-flex justify-content-start'>{`Introduction of video Editing`}</h6>
            <div className="progress my-2">
              <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h6 className='d-flex justify-content-start'>{`How to learn Graphic desinging`}</h6>
            <div className="progress my-2">
              <div className="progress-bar bg-warning" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h6 className="card-title my-3">Personal Details</h6>
            <table className="table">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Age</td>
                  <td>Gender</td>
                  <td>email</td>
                  <td>Phone Number</td>
                  <td>Address</td>
                </tr>
                <tr>
                <td>{`${student.name}`}</td>
                  <td>{`${student.age}`}</td>
                  <td>{`${student.gender}`}</td>
                  <td>{`${student.email}`}</td>
                  <td>{`${student.phoneno}`}</td>
                  <td>{`${student.Address}`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Studentadmin;