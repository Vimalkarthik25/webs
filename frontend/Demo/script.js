// Add smooth scrolling to navigation links
// Example property data
const properties = [
	{
		id: 1,
		location: 'Bangalore',
		propertyType: 'Apartment',
		area: Bangalore South,
		budget: 1000000
	},
	{
		id: 2,
		location: 'Bangalore',
		propertyType: 'Flats',
		area: Bangalore South,
		budget: 1000000
	},
	{
		id: 3,
		location: 'Bangalore',
		propertyType: 'Office Space',
		area: Bangalore South,
		budget: 1000000
	}
];

// Example search function
function searchProperties(location, propertyType, area, budget) {
	return properties.filter(property => 
		property.location.toLowerCase().includes(location.toLowerCase()) &&
		property.propertyType.toLowerCase() === propertyType.toLowerCase() &&
		property.area >= area &&
		property.budget <= budget
	);
}

// Example display function
function displayProperties(properties) {
	const propertyList = document.getElementById('property-list');
	propertyList.innerHTML = '';
	properties.forEach(property => {
		const propertyItem = document.createElement('li');
		propertyItem.innerHTML = `
			<h3>${property.location}</h3>
			<p>Property Type: ${property.propertyType}</p>
			<p>Area: ${property.area} sq ft</p>
			<p>Budget: $${property.budget}</p>
		`;
		propertyList.appendChild(propertyItem);
	});
}

// Example event listener
document.getElementById('search-form').addEventListener('submit', event => {
	event.preventDefault();
	const location = document.getElementById('location').value;
	const propertyType = document.getElementById('property-type').value;
	const area = document.getElementById('area').value;
	const budget = document.getElementById('budget').value;
	const properties = searchProperties(location, propertyType, area, budget);
	displayProperties(properties);
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});