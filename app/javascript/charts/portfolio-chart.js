import Chart from 'chart.js/auto';
import { easingEffects } from 'chart.js/helpers'
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

  let easing = easingEffects.easeInCubic;
  const totalDuration = 2000;
  const duration = (ctx) => easing(ctx.index / values.length) * totalDuration / values.length
  const delay = (ctx) => easing(ctx.index / values.length) * totalDuration;
  const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
  const animation = {
    x: {
      type: 'number',
      easing: 'linear',
      duration: duration,
      from: NaN, // the point is initially skipped
      delay(ctx) {
        // if (ctx.type !== 'data' || ctx.xStarted) {
        //   return 0;
        // }
        ctx.xStarted = true;
        return delay(ctx);
      }
    },
    y: {
      type: 'number',
      easing: 'linear',
      duration: duration,
      from: previousY,
      delay(ctx) {
        // if (ctx.type !== 'data' || ctx.yStarted) {
        //   return 0;
        // }
        ctx.yStarted = true;
        return delay(ctx);
      }
    }
  };

  const formattedDates = timestamps.map(timestamp => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-GB");
  });

  const portfolioCanvas = document.getElementById('portfolioCanvas')
  if (portfolioCanvas) {
    const lineChart = new Chart(portfolioCanvas, {
      backgroundColor: "#F9BEB3",
      type: 'line',
      data: {
        labels: formattedDates,
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
        animation,
        aspectRatio: 4,
        plugins: {
          customCanvasBackgroundColor: {
            color: '#151515',
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
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
                const date = context[0].label
                return `${date}`
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
              display: false,
              labelString: 'Month'
            },
            ticks: {
              display: false
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
