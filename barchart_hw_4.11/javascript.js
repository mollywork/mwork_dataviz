var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Europe & Central Asia', 'America', 'East Asia & Pacific', 'Middle East & North Africa', 'Sub Saharan Africa', 'South Asia'],
        datasets: [{
            label: 'Average of GDP per Capita',
            data: [20818.45, 18791.13, 14480.3, 13856, 2569, 2505.17],
            backgroundColor: [
                '#ff0800'
            ]
        },

    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Europe and Central Asia have highest gross domestic product per capita',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Sub Saharan Africa and South Asia have lowest gross domestic products (GDP) per capita.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
