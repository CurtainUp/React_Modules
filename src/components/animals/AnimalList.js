import React, { Component } from 'react'

class AnimalList extends Component {
    // getOwners() {}


    render() {
        return (
            <section className="list animals">
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id}>
                            {animal.name}
                        </div>
                    )}
            </section>
        )
    }
}

export default AnimalList