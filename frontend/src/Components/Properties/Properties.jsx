import React from 'react';
import './Properties.css'; // Ensure to import your CSS file

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
        <section className="property-section">
            <div className="property-row">
                <div className="property-column popups-column">
                    <h2 className="column-title">Pop Ups</h2>
                    <ul className="popup-list">
                        <li>About Constructions</li>
                        <li>About Vaastu</li>
                    </ul>
                </div>
                <div className="property-column properties-column">
                    <h2 className="column-title">Properties</h2>
                    <ul className="properties-list">
                        {propertiesData.map((property, index) => (
                            <li key={index} className="property-item">
                                <h3 className="property-name">{property.name}</h3>
                                <p className="property-type">Property Type: {property.type}</p>
                                <button className="property-button">View Details</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="property-column advertisement-column">
                    <h2 className="column-title">Advertisement</h2>
                    <img className="advertisement-img" src="ad.jpg" alt="Advertisement" />
                </div>
            </div>
        </section>
    );
};

export default Properties;
