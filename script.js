// Sample dress data
const dresses = [
    { description: "red evening gown", image: "red-dress.jpg" },
    { description: "casual summer dress", image: "summer-dress.jpg" },
    { description: "black party dress", image: "black-dress.jpg" },
];

// Search function
function searchDress() {
    const input = document.getElementById('dressInput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Search for dresses matching the input
    const matchedDresses = dresses.filter(dress => 
        dress.description.includes(input)
    );

    if (matchedDresses.length > 0) {
        matchedDresses.forEach(dress => {
            const dressDiv = document.createElement('div');
            dressDiv.classList.add('dress-item');
            dressDiv.innerHTML = `
                <h3>${dress.description}</h3>
                <img src="${dress.image}" alt="${dress.description}" width="200">
            `;
            resultsContainer.appendChild(dressDiv);
        });
    } else {
        resultsContainer.innerHTML = <p>No dresses found. Try another description!</p>;
    }
}