var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['White', 'Black', 'Hispanic', 'American Indian', 'Asian'],
        datasets: [{
            label: 'Amount of shooters from 1999 to 2019',
            data: [61, 40, 6, 3, 1],
            backgroundColor: [
                '#446BFA'
            ]


        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'The majority of school shooters are white',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'According to Washington Post data, from 1999 to 2019, 238 school shootings occurred. Most shooters, 61, were white. Meanwhile, less than 10 shooters were Hispanic, American Indian or Asian.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
