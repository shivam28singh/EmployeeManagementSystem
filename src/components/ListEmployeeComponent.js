import React, { Component} from 'react';
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import EmployeeService from '../services/EmployeeService';

function ListEmployeeComponent() {
 
    const [employees,setEmployees] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
         EmployeeService.getEmployees().then((res)=>{
             setEmployees(res.data);
         }).catch(()=>{
            console.log("api calling has not been working.")
         });
    },[]);
    
    const addEmployee = ()=>{
       navigate("/add-employee");
    }

    const updateEmployeeHandler = (id)=>{
        navigate("/update-employee/" + id);
    }

    const deleteEmployeeHandler = (id)=>{
        EmployeeService.deleteEmployeeById(id).then(
            ()=>{
            EmployeeService.getEmployees().then((res)=>{setEmployees(res.data)})
            }
        );
    }

        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div>
                    <button className='btn btn-primary' onClick={addEmployee}>
                       Add Employee
                    </button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Employee Joining Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           { 
                          employees.map(
                            employee=>
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>{employee.dateOfJoining}</td>
                                <td>
                                    <button className='btn btn-info' onClick={ ()=>{updateEmployeeHandler(employee.id)}}> Update</button>
                                    <button className='btn btn-danger' onClick = {()=>{deleteEmployeeHandler(employee.id)}}>Delete</button>
                                </td>
                            </tr>
                            )
                           }
                       </tbody>
                    </table>
                </div>
            </div>
        );
}

export default ListEmployeeComponent;