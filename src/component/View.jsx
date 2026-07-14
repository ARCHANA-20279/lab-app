import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const View = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-course")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Semester</th>
                                    <th>Course</th>
                                    <th>System No</th>
                                    <th>Login Time</th>
                                    <th>Logout Time</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.name}</td>
                                        <td>{value.department}</td>
                                        <td>{value.sem}</td>
                                        <td>{value.course}</td>
                                        <td>{value.systemNo}</td>
                                        <td>{value.login_time}</td>
                                        <td>{value.logout_time}</td>
                                        <td>{value.date}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default View