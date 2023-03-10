import {Chart, Tooltip } from 'chart.js/auto'
import 'chartjs-adapter-luxon'


const chartCreate = (timestamps, values) => {

  // Chart.Tooltip.positioners.fixed = function(items) {
  //   const chart = this.chart;
  //   return {
  //     x: chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2,
  //     y: 100,
  //     xAlign: "center"
  //   }
  // }
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

  const portfolioCanvas = document.getElementById('portfolioCanvas');
  const lineChart = new Chart ('portfolioCanvas', {
    backgroundColor: "#F9BEB3",
    type: 'line',
    data: {
      labels: timestamps,
      datasets: [{
        tension: 0.4,
        pointHoverRadius: 10,
        label: 'Portfolio Value',
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
          xAlign: 'center'
        }
      },
      scales: {
        y: {
          scaleLabel: {
            display: false,
            labelString: 'Portfolio Value'
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
          type: "time",
          time: {
            unit: "month"
          },
          scaleLabel: {
            display: true,
            labelString: 'Month'
          },
          ticks: {
            callback: function(value, index){
              if (index === 0 || index === timestamps.length - 1) {
                return this.getLabelForValue(value);
              } else {
                return '';
              }
            },
            font: {
              size: 12,
            }
          },
          grid: {
            display: false,
        },
        }
      },
      elements: {
        point: {
          radius: 0
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      },
      hover: {
        intersect: false,
        pointRadius: 10
      }
    }
  })
}

export { chartCreate }
