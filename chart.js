
// Chart 1: Top 3 Genres

const chart1 = new Chart(document.getElementById('chart1'), {
    type: 'bar',
    data: {
        labels: ['Rock', 'Pop', 'Jazz'],
        datasets: [{
            label: 'Antal sange',
            data: [110, 90, 70],
            backgroundColor: ['#4455aa', '#8899dd', '#aaccee']
        }]
    },
    options: {
        plugins: { legend: { display: false } }
    }
});
