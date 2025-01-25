document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form values
    const description = document.getElementById('description').value;
    const minPrice = parseFloat(document.getElementById('minPrice').value);
    const maxPrice = parseFloat(document.getElementById('maxPrice').value);

    // Sample data: In a real application, you might fetch this from an API or a database
    const dresses = [
        { name: 'Red Dress', description: 'Casual Summer', price: 50, imageUrl: 'https://via.placeholder.com/200' },
        { name: 'Blue Evening Gown', description: 'Formal Event', price: 150, imageUrl: 'https://via.placeholder.com/200' },
        { name: 'Black Party Dress', description: 'Night Out', price: 80, imageUrl: 'https://via.placeholder.com/200' },
        { name: 'Green Summer Dress', description: 'Casual Summer', price: 45, imageUrl: 'https://via.placeholder.com/200' },
        { name: 'White Wedding Dress', description: 'Wedding', price: 500, imageUrl: 'https://via.placeholder.com/200' }
    ];

    // Filter dresses based on the search criteria
    const filteredDresses = dresses.filter(dress => {
        return (
            dress.description.toLowerCase().includes(description.toLowerCase()) &&
            dress.price >= minPrice &&
            dress.price <= maxPrice
        );
    });

    // Get the results container and clear it
    const resultsContainer = document.getElementById('dressResults');
    resultsContainer.innerHTML = '';

    // If there are no results
    if (filteredDresses.length === 0) {
        resultsContainer.innerHTML = '<p>No dresses found matching your criteria.</p>';
        return;
    }

    // Display the filtered dresses
    filteredDresses.forEach(dress => {
        const dressDiv = document.createElement('div');
        dressDiv.classList.add('dress');
        dressDiv.innerHTML = `
            <img src="${dress.imageUrl}" alt="${dress.name}">
            <h3>${dress.name}</h3>
            <p>${dress.description}</p>
            <span>$${dress.price}</span>
        `;
        resultsContainer.appendChild(dressDiv);
    });
});
