import React, { Component } from 'react';
import {useState,useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function UpdateEmployeeComponent() {

    const navigate = useNavigate();
   
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [emailID,setEmailID] = useState("");
    const [joiningDate,setJoiningDate] = useState("");
    const {id} = useParams();

    useEffect(()=>{
      EmployeeService.getEmployeeById(id).then((res)=>{
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmailID(res.data.emailId);
        setJoiningDate(res.data.dateOfJoining);
      })
    },[]);
    

    const changeFirstNameHandler = (event)=>{
        setFirstName(event.target.value);
    }

    const changeLastNameHandler = (event)=>{
        setLastName(event.target.value);
    }
    const changeEmailIDHandler = (event) =>{
        setEmailID(event.target.value);
    }

    const changeJoiningDateHandler = (event) =>{
        setJoiningDate(event.target.value);
    }

    const saveEmployeeHandler = (event) =>{
         event.preventDefault();
         if(firstName==="" || lastName==="" || emailID==="")
           return;
        
        const data = {
            firstName : firstName,
            lastName : lastName,
            emailId : emailID,
            dateOfJoining : joiningDate
        }
        const JSON_data = JSON.stringify(data);
        EmployeeService.updateEmployee(data,id).then((res)=>{
            navigate("/employees");
        })

        console.log(JSON_data);
    }

    const cancelHandler = ()=>{
        navigate("/");
    }


        return (
            <> 
             <div className="container d-flex justify-content-center">
             <div className="card w-50">
             <h3>Update Employee</h3>
             <div className="card-body">
               <form>
                <div className="form-group">
                    <label htmlFor="firstName">FirstName</label>
                    <input id="firstName" className="form-control" value={firstName} onChange={changeFirstNameHandler}></input>
                </div>
                
                <div className="form-group">
                    <label htmlFor="lastName">LastName</label>
                    <input id="lastName" className="form-control" value={lastName} onChange={changeLastNameHandler}></input>
                </div>
                
                <div className="form-group">
                    <label htmlFor="emailID">EmailID</label>
                    <input id="emailID" className="form-control" value={emailID} onChange={changeEmailIDHandler}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="joiningDate">Joining Date</label>
                    <input type="date" id="joiningDate" className="form-control" value={joiningDate} onChange={changeJoiningDateHandler}></input>
                </div>
                 
                <button className="btn btn-primary" onClick={saveEmployeeHandler}>Update</button>
                <button className="btn btn-danger " onClick={cancelHandler}>Cancel</button>
               </form>
              </div>
             </div>
            </div>
            </>
        );
}

export default UpdateEmployeeComponent;