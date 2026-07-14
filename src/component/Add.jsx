import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Add = () => {
    const[input,changeInput]=useState(
        {

          
    "name": "",
    "department": "",
    "sem": "",
    "course": "",
    "systemNo": "",
    "login_time": "",
    "logout_time": "",
    "date": "",
   
        }

    )
    const inputHandler=( (event)=>{

            changeInput({...input,[event.target.name]: event.target.value})
        }
    )
    const readValue=(
        ()=>{
            console.log(input)
axios.post("http://localhost:3000/add-course",input).then(
    (response)=>{ response.data}
).catch()

        }
    )
  return (
    <div>
        <Nav />
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">name</label>
                       <input type="text" className="form-control" 
                        name="name"
                        value={input.name}
                        onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">department</label>
                        <input type="text" className="form-control" 
                        name="department"
                        value={input.department}
                        onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">sem</label>
                        <input type="text" className="form-control" 
                        name="sem"
                        value={input.sem}
                        onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">course</label>
                        <input type="text" className="form-control" 
                        name="course"
                        value={input.course}
                        onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-control">systemNo</label>
                        <input type="text" className="form-control" 
                        name="systemNo"
                        value={input.systemNo}
                        onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">login_time</label>
                        <input type="time" className="form-control"
                        name="login_time"
                        value={input.login_time}
                        onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="from-label">logout_time</label>
                        <input type="time" className="form-control" 
                        name="logout_time"
                        value={input.logout_time}
                        onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">date</label>
                        <input type="date" className="form-control"
                        name="date"
                        value={input.date}
                        onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary" onClick={readValue}>submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Add