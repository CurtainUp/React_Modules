import React, { Component } from 'react'
import "./Owner.css"
class OwnerList extends Component {
    render() {
        return (
            <section className="list owners">
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <p>{owner.name}</p>
                                    <p className="phone-number">Phone Number: {owner.phoneNumber}</p>
                                    <a href="#"
                                        onClick={() => this.props.deleteOwner(owner.id)}
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

export default OwnerList