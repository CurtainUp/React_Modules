import React, { Component } from 'react'
import "./Employee.css"

class EmployeeList extends Component {
    render() {
        return (
            <section className="list employees">
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <p>{employee.name}</p>
                                    <a href="#"
                                        onClick={() => this.props.deleteEmployee(employee.id)}
                                        className="card-link">Delete</a>
                                </h5>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default EmployeeList