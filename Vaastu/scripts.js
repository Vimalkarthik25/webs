document.getElementById('search-form').addEventListener('submit', event => {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const propertyType = document.getElementById('property-type').value;
    const transactionType = document.getElementById('transaction-type').value;
    const budget = document.getElementById('budget').value;
    const area = document.getElementById('area').value;

    // Make an AJAX request to the /search route
    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `location=${encodeURIComponent(location)}&property-type=${encodeURIComponent(propertyType)}&transaction-type=${encodeURIComponent(transactionType)}&budget=${encodeURIComponent(budget)}&area=${encodeURIComponent(area)}`
    })
    .then(response => response.json())
    .then(properties => {
        displayProperties(properties);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function displayProperties(properties) {
    const propertyList = document.getElementById('property-list');
    propertyList.innerHTML = '';

    properties.forEach(property => {
        const propertyItem = document.createElement('li');
        propertyItem.innerHTML = `
            <h3>${property.location}</h3>
            <p>Property Type: ${property.property_type}</p>
            <p>Area: ${property.area}</p>
            <p>Budget: ${property.transaction_type === 'buy' ? '₹' : '₹ per month'} ${property.budget}</p>
        `;
        propertyList.appendChild(propertyItem);
    });
}

function updateBudgetOptions() {
    const transactionType = document.getElementById('transaction-type').value;
    const budgetSelect = document.getElementById('budget');
    budgetSelect.innerHTML = '';

    if (transactionType === 'buy') {
        const options = ['< ₹3 lakhs', '₹3-5 lakhs', '₹5-7 lakhs', '₹7-10 lakhs', '> ₹10 lakhs'];
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.innerText = option;
            budgetSelect.appendChild(opt);
        });
    } else if (transactionType === 'rent') {
        const options = ['< ₹10,000', '₹10,000-20,000', '₹20,000-30,000', '₹30,000-50,000', '> ₹50,000'];
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.innerText = option;
            budgetSelect.appendChild(opt);
        });
    } else {
        const opt = document.createElement('option');
        opt.value = '-';
        opt.innerText = '-';
        budgetSelect.appendChild(opt);
    }
}

function loadSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Load home section by default
document.addEventListener('DOMContentLoaded', () => {
    loadSection('hero');
});
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('close-popup');

    function showPopup() {
        popup.classList.remove('hidden');
        popup.style.display = 'block';

        // Auto-hide popup after 5 seconds if not manually closed
        setTimeout(() => {
            hidePopup();
        }, 10000);
    }

    function hidePopup() {
        popup.classList.add('hidden');
        popup.style.display = 'none';
    }

    closePopupButton.addEventListener('click', hidePopup);

    // Show the popup every 8 seconds
    setInterval(showPopup, 10000);
});

function loadSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
