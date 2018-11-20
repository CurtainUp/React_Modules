import React, { Component } from 'react'
import './Location.css'

class LocationList extends Component {
    render() {
        return (
            <section className="list locations">
                {
                    this.props.locations.map(location =>
                        <div key={location.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <p>{location.name}</p>
                                    <p className="location-address">{location.address}</p>
                                </h5>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default LocationList