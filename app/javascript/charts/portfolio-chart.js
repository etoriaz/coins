Chart.Tooltip.positioners.fixed = function(items) {
  const chart = this.chart;
  return {
    x: chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2,
    y: 100,
    xAlign: "center"
  }
}


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
    labels: ['Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sept 2022', 'Oct 2022', 'Nov 2022', 'Dec 2022'],
    datasets: [{
      tension: 0.4,
      pointHoverRadius: 10,
      label: 'Portfolio Value',
      data: [10000, 9000, 12000, 7500, 13000, 14000, 17000, 11000, 20000, 22000, 25000, 17000],
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
    plugins: {
      customCanvasBackgroundColor: {
        color: 'black',
      }
    },
      legend: {
        display: false,
      },

    scales: {
      y: {
        scaleLabel: {
          display: false,
          labelString: 'Portfolio Value'
        },
        ticks: {
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
      }
    }
  }
});
