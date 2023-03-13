import Chart from 'chart.js/auto';
import 'chartjs-adapter-luxon'

const chartCreate = () => {
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
        labels: ['Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022'],
        datasets: [{
          tension: 0.4,
          pointHoverRadius: 10,
          label: ['Porfolio Value'],
          data: [12000, 10000, 18000, 19000, 11000, 17000, 20000],
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
            callbacks: {
              label: function(context) {
                const contextValue = context.dataset.data[context.dataIndex];
                const result = contextValue.toLocaleString().replace(/,/g, ' ').split('.')[0];
                if (contextValue.toString().indexOf('.') !== -1) {
                  result += contextValue.toString().slice(contextValue.toString().indexOf('.'));
                }
                return `$${result}`
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
