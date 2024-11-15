import React ,{useEffect, useState} from 'react'
import { listEmployees } from '../service/EmployeeService'
import { Button } from 'bootstrap'
import { useNavigate } from 'react-router-dom'


//using (rafce) react arror functional comnponent export
const ListEmployeeComponent = () => {

    const [employees ,setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect(()=>{
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    },[])

    function AddNewEmployee(){
        navigator('/add-employee')
         
    }




  return (
    <div className='container'>

        <h2 className='text-center'>List of Employee</h2>

        <button type="button" class="btn btn-primary mb-3" onClick={AddNewEmployee} >Add Employee</button>

        {/* create a table for dispaly data */}

        <table className='table table-striped  table-bordered table-hover' >
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                       <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                       </tr> 
                    )

                }

            </tbody>
        </table>


      
    </div>
  )
}

export default ListEmployeeComponent

