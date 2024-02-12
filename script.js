document.addEventListener('DOMContentLoaded', function () {
    
    const apiUrlX = 'https://retoolapi.dev/gDa8uC/data';
    const apiUrlY = 'https://retoolapi.dev/o5zMs5/data';

    
    Promise.all([
        fetch(apiUrlX).then(response => response.json()),
        fetch(apiUrlY).then(response => response.json()),
    ])
    .then(([dataX, dataY]) => {
       
        const xValues = dataX.map(item => item.RandomNumber).slice(0, 50);
        const yValues = dataY.map(item => item.RandomNumber).slice(0, 50);

       
        createChart(xValues, yValues);
    })
    .catch(error => console.error('Error fetching data:', error));
});

function createChart(xValues, yValues) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 50 }, (_, i) => `Label ${i + 1}`), 
            datasets: [{
                label: 'X Values',
                data: xValues,
                borderColor: 'rgb(75, 192, 192)',
                fill: false,
            }, {
                label: 'Y Values',
                data: yValues,
                borderColor: 'rgb(255, 99, 132)',
                fill: false,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
