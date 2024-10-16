const ctx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Winter', 'Spring', 'Summer', 'Autumn'],
        datasets: [{
            label: 'Dev team',
            data: [50, 60, 87, 40],
            borderColor: '#4b4ce8',
            fill: true,
            backgroundColor: 'rgba(75, 75, 232, 0.1)',
            tension: 0.4
        },
        {
            label: 'Design team',
            data: [30, 45, 75, 50],
            borderColor: '#e9b7ff',
            fill: true,
            backgroundColor: 'rgba(233, 183, 255, 0.1)',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
