import React, { Component } from 'react'

export default class LocationList extends Component {
    render() {
        return (
            <article class="list">
                <h1>Kennel Locations</h1>
                <div>
                    <h4>Nashville North Location</h4>
                    <h5>500 Puppy Way</h5>
                    <h4>Nashville South Location</h4>
                    <h5>250 Labradoodle Ave</h5>
                </div>
            </article>
        );
    }
}