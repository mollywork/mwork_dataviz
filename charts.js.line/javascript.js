var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2015', '2016', '2017', '2018', '2019'],
        datasets: [{
            label: 'Number of school shootings',
            data: [7, 13, 15, 25, 8],
            fill: true,
            borderColor: 'rgba(68, 107, 250)',
            backgroundColor: 'rgba(68, 107, 250, 0.1)',
            tension: 0.1},

        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: '2018 had the most school shootings in the past five years',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The amount of school shootings gradually increased from 2015 until 2018 when there were 25 school shootings. In 2019, school shootings dropped to eight shootings.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});
