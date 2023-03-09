import { Controller } from "@hotwired/stimulus"
import { getHistoryForAddress } from "../api/history";
import { chartCreate } from "../charts/portfolio-chart"

// Connects to data-controller="charts"
export default class extends Controller {
  connect() {
    getHistoryForAddress("3Dh8ZebbTSNboNwdwvPA6NjUdfsamPJGXo", 90, "12h")
      .then((data) => {
        chartCreate(data.timestamps, data.values)
      })
  }
}
