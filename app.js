document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form values
    const description = document.getElementById('description').value;
    const minPrice = parseFloat(document.getElementById('minPrice').value);
    const maxPrice = parseFloat(document.getElementById('maxPrice').value);

    // Sample data: In a real application, you might fetch this from an API or a database
    const dresses = [
        { name: 'Red Dress', description: 'Casual Summer', price: 1500, imageUrl: 'https://www.myntra.com/dresses/stylecast/stylecast-red-shoulder-straps-mini-bodycon-dress/24541592/buy' },
        { name: 'Blue Evening Gown', description: 'Formal Event', price: 2500, imageUrl: 'https://www.myntra.com/dresses/stylecast/stylecast-navy-blue-v-neck-fit--flare-maxi-dress/29505018/buy' },
        { name: 'Black Party Dress', description: 'Night Out', price: 3000, imageUrl: 'https://www.myntra.com/dresses/traquila/traquila-bodycon-maxi-dress/31734225/buy' },
        { name: 'Green Crochet Top', description: 'Casual Summer', price: 450, imageUrl: 'https://www.myntra.com/tops/cover+story/cover-story-green-pure-cotton-crochet-semi-sheer-cropped-top/14775820/buy' },
        { name: 'Brown Skirt', description: 'picnic', price: 500, imageUrl: 'https://littleboxindia.com/products/high-waist-ruched-ruffle-chocolate-brown-skirt?variant=47838496948511&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOorCsHVLPpIVsL4cv2Dd0AbQ7NpFk4u__RQop0Fdpbad-9Fv1L3ylmg' }
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
