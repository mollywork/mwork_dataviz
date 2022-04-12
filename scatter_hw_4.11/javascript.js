var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#ADCC1D", 
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#CC5245",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#CCB21D",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#27CC73",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#258018",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#CC7945",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#963BCC",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#2B1DCC",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,

              }
            ]
          },
          options: {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Top 10 largest countries in the world',
            font: {
                size: 18
            }
        },
        subtitle: {
            display: true,
            text: 'Compared to the largest countries, the United States and Japan have the highest life expectancies and GDPs.'
        }
    },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });
