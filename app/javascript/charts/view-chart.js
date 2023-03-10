const viewChartCreate = () => {
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

  const portfolioCanvas = document.getElementById('viewCanvas');
  const pieChart = new Chart ('viewCanvas', {
    backgroundColor: "",
    type: 'pie',
    data: {
      labels: ['top crypto trader'],
      datasets: [{
        tension: 0.4,
        pointHoverRadius: 10,
        label: 'Portfolio Value',
        data: [100],
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: 'rgba(255, 153, 0, 1)',
        borderWidth: 2,
        borderRadius: 2,
      }]
    },
    plugins: [plugin],
    options: {
      aspectRatio: 4,
      plugins: {
        customCanvasBackgroundColor: {
          color: '',
        }
      },
        legend: {
          display: false,
        },

      scales: {
        y: {
          beginAtZero: true,
          scaleLabel: {
            display: false,
            labelString: 'Portfolio distribution'
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
            callback: function(value, index){
              console.log(this.getLabelForValue())
                if (this.getLabelForValue(index) == 0 || index === value.length - 1) {
                  return this.getLabelForValue(value)
                } else {
                  return ''
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
      }
    }
  })
}

export { viewChartCreate }
