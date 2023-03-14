import Chart from 'chart.js/auto';
import 'chartjs-adapter-luxon'


const chartCreate = (timestamps, values) => {

  Chart.defaults.font.family = "Arial";

  const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = options.color || '#99ffff';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };

  const portfolioCanvas = document.getElementById('portfolioCanvas')
  if (portfolioCanvas) {
    const lineChart = new Chart(portfolioCanvas, {
      backgroundColor: "#F9BEB3",
      type: 'line',
      data: {
        labels: timestamps,
        datasets: [{
          tension: 0.4,
          pointHoverRadius: 10,
          label: ['Porfolio Value'],
          data: values,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderColor: 'rgba(255, 153, 0, 1)',
          borderWidth: 2,
          borderRadius: 2,
          fill: {
          target: 'origin',
          above: 'rgba(255, 153, 0, 0.2)',
          below: 'rgba(255, 153, 0, 0.2)'
          }
        }]
      },
      plugins: [plugin],
      options: {
        aspectRatio: 4,
        plugins: {
          customCanvasBackgroundColor: {
            color: '#151515',
          },
          legend: {
            display: false,
          },
          tooltip: {
            displayColors: false,
            bodyFont: {
              size: 18
            },
            callbacks: {
              label: function(context) {
                const value = context.dataset.data[context.dataIndex];
                const formattedValue = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency:'USD',
                  minimumFractionDigits: value % 1 != 0 ? 2 : 0,
                  maximumFractionDigits: value % 1 != 0 ? 2 : 0
                }).format(value);
                return `${formattedValue}`
              },
              title: function(context) {
                const date = parseInt(context[0].label, 10)
                const formattedDate = new Date(date).toLocaleDateString("en-GB")
                return `${formattedDate}`
              }
            }
          }
        },
        scales: {
          y: {
            scaleLabel: {
              display: false,

            },
            ticks: {
              display: false,
              font: {
                size: 24
              }
            },
            grid: {
              display: false
            }
          },
          x: {
            scaleLabel: {
              display: true,
              labelString: 'Month'
            },
            ticks: {
              font: {
                size: 12,
              },
              callback: function(value, index) {
                if (index % 2 === 0) {
                  return this.getLabelForValue(value)
                }
              }
            },
            grid: {
              display: false,
            },
          },
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        },
        elements: {
          point: {
            radius: 0
          }
        },
      }
    })
  }
}

export { chartCreate }
