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
});