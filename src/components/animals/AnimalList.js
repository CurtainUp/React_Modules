import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./Animal.css"

export default class AnimalList extends Component {
    getOwners(animal) {
        const ownerNames = []
        this.props.petOwners.forEach(petOwner => {
            if (petOwner.animal_id === animal.id) {
                this.props.owners.forEach(owner => {
                    if (owner.id === petOwner.owner_id) {
                        ownerNames.push(owner.name)
                    }
                })
            }
        })
        return `Owner(s): ${ownerNames.join(" and ")}`
    }

    render() {
        return (
            <section className="list animals">
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={dog} className="icon--dog" alt="Yellow cartoon dog on pink background." />
                                    <p>{animal.name}</p>
                                    <p className="owner-names">{this.getOwners(animal)}</p>
                                    <a href="#"
                                        onClick={() => this.props.deleteAnimal(animal.id)}
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