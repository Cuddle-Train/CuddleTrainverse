document.addEventListener('DOMContentLoaded', function() {
});

const form = document.getElementById('personal-details-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    handleFormData(name, age, height, weight);
});

function handleFormData(name, age, height, weight) {
    const data = {
        name,
        age,
        height,
        weight,
        timestamp: new Date().getTime()
    };

    let entries = localStorage.getItem('userEntries');
    entries = entries ? JSON.parse(entries) : [];
    entries.push(data);
    localStorage.setItem('userEntries', JSON.stringify(entries));

    displayProgress(entries);
}

function displayProgress(entries) {
    const container = document.createElement('div');

    if (entries.length >= 2) {
        const latestEntry = entries[entries.length - 1];
        const previousEntry = entries[entries.length - 2];

        const weightDifference = latestEntry.weight - previousEntry.weight;
        container.innerHTML = `
            <p>Last Recorded Weight: ${previousEntry.weight}kg</p>
            <p>Current Weight: ${latestEntry.weight}kg</p>
            <p>Weight Difference: ${weightDifference}kg</p>
            <!-- You can add more comparisons here -->
        `;
    } else if (entries.length === 1) {
        container.innerHTML = `
            <p>Current Weight: ${entries[0].weight}kg</p>
        `;
    }

    document.body.appendChild(container);
}

document.addEventListener('DOMContentLoaded', function() {
    const entries = localStorage.getItem('userEntries');
    if (entries) {
        displayProgress(JSON.parse(entries));
    }
});
