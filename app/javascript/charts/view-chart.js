import { Chart } from 'chart.js'
const viewChartCreate = (portfolios, addressesNum) => {
  Chart.defaults.font.family = "Arial";

  const viewCanvas = document.getElementById('viewCanvas')
  if (viewCanvas) {
    const data =  {
      labels: portfolios,
      datasets: [{
        label: 'Portfolio distribution',
        data: addressesNum,
        backgroundColor: [],
        borderColor: '#2D2D2D',

      }]
    };

    const colors = ['#FAAE7B', '#CC8B79','#9F6976', '#714674', '#432371','#B2A496',
    '#9D8977', '#886E58','#735238', '#5E3719','#2f3e46', '#354f52', '#52796f', '#84a98c',
    '#cad2c5','#caf0f8', '#90e0ef', '#00b4d8', '#0077b6', '#03045e'];

    for (let i = 0; i < data.datasets[0].data.length; i++) {
      const color = colors[i % colors.length];
      data.datasets[0].backgroundColor.push(color);
    }

    const pieChart = new Chart(viewCanvas, {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
              let sum = 0;
              let dataArr = context.chart.data.datasets[0].data;
              dataArr.forEach(data => {
                sum += data;
              });
              let value = context.parsed;
              let percentage = ((value*100) / sum).toFixed(2) + "%";
              return `Portfolio distribution: ${percentage}`;
              }
            }
          }
        }
      },
    });
  }
};

// document.addEventListener('DOMContentLoaded', () => {
//   viewChartCreate();
// });

export { viewChartCreate }
