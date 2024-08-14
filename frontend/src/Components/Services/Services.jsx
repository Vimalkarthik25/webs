import React from 'react';
import './Services.css'; // Make sure to import your CSS file

const Services = () => {
    return (
        <section className="services-section">
            <div className="services-content">
                <div className="service-item">
                    <h3 className="service-title">Vaastu Consultation</h3>
                    <p className="service-description">
                        Detailed consultation on the selection of a construction site. We provide you with a comprehensive pictorial presentation based on Vaastu principles to ensure harmony and prosperity in your home or business.
                    </p>
                </div>
                <div className="service-item">
                    <h3 className="service-title">Construction</h3>
                    <ul className="service-list">
                        <li>Interior Decorations</li>
                        <li>Exterior Decorations</li>
                        <li>Electrical Work</li>
                        <li>Plumbing</li>
                        <li>Modular Kitchen</li>
                        <li>False Ceilings</li>
                        <li>Furnishing</li>
                        <li>Other Services</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;
