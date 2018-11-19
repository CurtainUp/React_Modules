import React, { Component } from 'react'

class OwnerList extends Component {
    render() {
        return (
            <section className="list owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                        {owner.name}
                        <p>{owner.phoneNumber}</p>
                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnerList