import React from 'react';
import './Properties.css'; // Make sure to import your CSS file

const propertiesData = [
    { name: 'Property A', type: 'House' },
    { name: 'Property B', type: 'Apartment/Flats' },
    { name: 'Property C', type: 'Commercial Space' },
    { name: 'Property D', type: 'Individual House' },
    { name: 'Property E', type: 'Office Space' },
    { name: 'Property F', type: 'Factory/Industries' },
    { name: 'Property G', type: 'Godown/Warehouse' },
    { name: 'Property H', type: 'Plots' },
    { name: 'Property I', type: 'Agricultural Lands' },
    { name: 'Property J', type: 'Others' },
];

const Properties = () => {
    return (
        <section className="properties">
            <div className="row">
                <div className="col-md-3">
                    <h2>Pop Ups</h2>
                    <ul>
                        <li>About Constructions</li>
                        <li>About Vaastu</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h2>Properties</h2>
                    <ul className="property-list">
                        {propertiesData.map((property, index) => (
                            <li key={index} className="property-item">
                                <h3>{property.name}</h3>
                                <p>Property Type: {property.type}</p>
                                <button className="view-details-button">View Details</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-3">
                    <h2>Advertisement</h2>
                    <img className="advertisement" src="ad.jpg" alt="Advertisement" />
                </div>
            </div>
        </section>
    );
};

export default Properties;
