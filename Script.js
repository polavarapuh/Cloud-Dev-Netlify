document.addEventListener('DOMContentLoaded', () => {
    // 1. Status Update
    const status = document.querySelector('#header span');
    status.textContent = "Workflow Active 🚀";

    // 2. Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // 3. Counter Logic
    let count = 0;
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');

    incrementBtn.addEventListener('click', () => {
        count++;
        counterValue.textContent = count;
    });

    async function getVisitorData() {
    const statusElement = document.getElementById('status');

    try {
        // 1. Call the Netlify function by its filename
        const response = await fetch('/.netlify/functions/get-visitors');

        if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
        }

        // 2. Parse the JSON data sent back from Neon
        const data = await response.json();
        
        console.log("Visitors found:", data);
        
        // 3. Simple way to display it on your page
        document.getElementById('visitor-list').innerHTML = data
        .map(visitor => `<li>${visitor.name || 'Anonymous'}</li>`)
        .join('');

    } catch (error) {
        console.error("Failed to fetch visitors:", error);
        statusElement.innerText = "Error loading visitors.";
    }
    }

        // Run the function when the page loads
        getVisitorData();
});