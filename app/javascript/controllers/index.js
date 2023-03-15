// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import AddressesController from "./addresses_controller"
application.register("addresses", AddressesController)

import BalanceController from "./balance_controller"
application.register("balance", BalanceController)

import EditPortfolioNameController from "./edit_portfolio_name_controller"
application.register("edit-portfolio-name", EditPortfolioNameController)

import PortfoliosController from "./portfolios_controller"
application.register("portfolios", PortfoliosController)

import PortfoliosDistributionController from "./portfolios_distribution_controller"
application.register("portfolios-distribution", PortfoliosDistributionController)
