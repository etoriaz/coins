import { Controller } from "@hotwired/stimulus"
import { Chart } from 'chart.js'
import { viewChartCreate } from "../charts/view-chart";
import { chartCreate } from "../charts/portfolio-chart"



// Connects to data-controller="portfolios-distribution"
export default class extends Controller {
  static values = {
    portfolios: Array,
    addresses: Array
  }
  connect() {
    console.log(this.portfoliosValue)
    console.log(this.addressesValue)

    viewChartCreate(this.portfoliosValue, this.addressesValue);
  }
}
