# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Création des seeds"
Address.destroy_all
MessageVote.destroy_all
PortfolioMessage.destroy_all
Portfolio.destroy_all
User.destroy_all
puts "Database cleaned"

###USERS###

user1 = User.create(
  username: "antoine12",
  email: "antoine12@gmail.com",
  password: "iwantcoins"
)

user2 = User.create(
  username: "marcel43",
  email: "marcel43@gmail.com",
  password: "iwantcoins"
)

user3 = User.create(
  username: "henri92",
  email: "henri92@gmail.com",
  password: "iwantcoins"
)

user4 = User.create(
  username: "martine34",
  email: "martine34@gmail.com",
  password: "iwantcoins"
)

user5 = User.create(
  username: "bernard67",
  email: "bernard67@gmail.com",
  password: "iwantcoins"
)

puts "Ok pour les users"

###PORTFOLOIOS###

portfolio1 = Portfolio.create(
  user: user1,
  name: "top crypto trader"
)

portfolio2 = Portfolio.create(
  user: user1,
  name: "top trader btc"
)

portfolio3 = Portfolio.create(
  user: user1,
  name: "vitalik btc"
)

portfolio4 = Portfolio.create(
  user: user1,
  name: "hasheur btc"
)

portfolio5 = Portfolio.create(
  user: user2,
  name: "my father btc"
)

portfolio6 = Portfolio.create(
  user: user2,
  name: "family crypto"
)

portfolio7 = Portfolio.create(
  user: user2,
  name: "my main portfolio"
)

portfolio8 = Portfolio.create(
  user: user3,
  name: "sunday fun"
)

portfolio9 = Portfolio.create(
  user: user3,
  name: "winter time"
)

portfolio10 = Portfolio.create(
  user: user4,
  name: "secondary one"
)

portfolio11 = Portfolio.create(
  user: user4,
  name: "my last portfolio"
)

portfolio12 = Portfolio.create(
  user: user5,
  name: "other crypto btc"
)

portfolio13 = Portfolio.create(
  user: user5,
  name: "favourite crypto btc"
)

puts "Ok pour les portfolios"

###AddressES###

address1 = Address.create(
  portfolio: portfolio1,
  public_key: "bc1q5crsrfueudwyfekpmcaqgzhqzxpedqersmtazt",
  blockchain: "bitcoin"
)

address2 = Address.create(
  portfolio: portfolio1,
  public_key: "bc1pajfaj0ddu9ny6v3gt82wa042xcztud7e0djms3ndyxa2hsfk7dgshnt500",
  blockchain: "bitcoin"
)

address3 = Address.create(
  portfolio: portfolio1,
  public_key: "bc1pwcqxzl9ufgje2ua29k299dy9zqa6cjwwmz5khxwjqche4swenf0smay4kw",
  blockchain: "bitcoin"
)

address4 = Address.create(
  portfolio: portfolio1,
  public_key: "bc1qd83p8v5nrn5z2dp9fgfgds75g9tu984fsv7gjv",
  blockchain: "bitcoin"
)

address5 = Address.create(
  portfolio: portfolio2,
  public_key: "bc1q7vf0cy9vjl2tfyk7228rynv5tk96xyp0n52yac",
  blockchain: "bitcoin"
)

address6 = Address.create(
  portfolio: portfolio2,
  public_key: "12ypg5Z2v5vM7mzdtcwgqN6K6HrcZQej7f",
  blockchain: "bitcoin"
)

address7 = Address.create(
  portfolio: portfolio2,
  public_key: "bc1qg7prtksujecuesd9eclqyjmqfte87sjrvpn6cs",
  blockchain: "bitcoin"
)

address8 = Address.create(
  portfolio: portfolio2,
  public_key: "bc1qw4ypfsepqumaxj6ssfaxpzqkxkv032ty0vhm4u",
  blockchain: "bitcoin"
)

address9 = Address.create(
  portfolio: portfolio3,
  public_key: "bc1q8vts7mmjjrsg6xflkyzvcx04ru635m4x857jsr",
  blockchain: "bitcoin"
)

address10 = Address.create(
  portfolio: portfolio3,
  public_key: "1KK954BCS4NuKmpPAVDeCbRQSL3Sxn7kTq",
  blockchain: "bitcoin"
)

address11 = Address.create(
  portfolio: portfolio3,
  public_key: "1962C9B87A1okeJw6QkvwR66rAMRaphaRG",
  blockchain: "bitcoin"
)

address12 = Address.create(
  portfolio: portfolio3,
  public_key: "19xTdBiTgdr13Mopsj3vihE7xGBAajckLY",
  blockchain: "bitcoin"
)

address13 = Address.create(
  portfolio: portfolio4,
  public_key: "3M7wNqYhXZ7PQJC8bFxWyGQigh6wtzY2PU",
  blockchain: "bitcoin"
)

address14 = Address.create(
  portfolio: portfolio4,
  public_key: "3AfXHwNmiJCzjnksHvUjrQJsy7uE5HACGV",
  blockchain: "bitcoin"
)

address15 = Address.create(
  portfolio: portfolio4,
  public_key: "17trQwtfnz5hHs2A95tRZDbfc8ukVpNjb1",
  blockchain: "bitcoin"
)

address16 = Address.create(
  portfolio: portfolio4,
  public_key: "bc1qcce60s0r4e7rhmvesex3ye3hh488rrjmye6y03",
  blockchain: "bitcoin"
)

address17 = Address.create(
  portfolio: portfolio5,
  public_key: "35A3rBeWvmbzAfx2uC1M2WwQFqKLfqK4vK",
  blockchain: "bitcoin"
)

address18 = Address.create(
  portfolio: portfolio5,
  public_key: "bc1q0cn7a2emrelrfyfma48pq7f8v8z43jtgf4z3hg",
  blockchain: "bitcoin"
)

address19 = Address.create(
  portfolio: portfolio5,
  public_key: "13nCMaHDNRGM29UfMMkhUQjHkVYY1ZyrpU",
  blockchain: "bitcoin"
)

address20 = Address.create(
  portfolio: portfolio6,
  public_key: "3GuEcFajmLRJFqDyprsU42EhLjsd51VUZK",
  blockchain: "bitcoin"
)

address21 = Address.create(
  portfolio: portfolio6,
  public_key: "1tqKXF6hXw2gspkU74d6nNrV6zxguf9kS",
  blockchain: "bitcoin"
)

address22 = Address.create(
  portfolio: portfolio6,
  public_key: "bc1qlrzua8jzketa4u720hqw53snu6xh6su2qqqykv",
  blockchain: "bitcoin"
)

address23 = Address.create(
  portfolio: portfolio7,
  public_key: "1tqKXF6hXw2gspkU74d6nNrV6zxguf9kS",
  blockchain: "bitcoin"
)

address24 = Address.create(
  portfolio: portfolio7,
  public_key: "bc1qrh5ap3zvhvqwsm7tynnmpy8yh6vh0ehg3hymhg",
  blockchain: "bitcoin"
)

address25 = Address.create(
  portfolio: portfolio7,
  public_key: "3JempQZzoLpvSAvceUYupzQF7E2tUnrHbC",
  blockchain: "bitcoin"
)

address26 = Address.create(
  portfolio: portfolio8,
  public_key: "bc1qm4c2muha3wnhq9p82dj0cy2sdq97pl3dth5ses",
  blockchain: "bitcoin"
)

address27 = Address.create(
  portfolio: portfolio8,
  public_key: "1EFBJ1EJwtyB92YPU4NRFhR1gnujTYKMoq",
  blockchain: "bitcoin"
)

address28 = Address.create(
  portfolio: portfolio9,
  public_key: "bc1qk7kl3fyy2vc0reygzzv4luxg400p2c535rkspp",
  blockchain: "bitcoin"
)

address29 = Address.create(
  portfolio: portfolio9,
  public_key: "389c4foZpZ4RF5bxmzVGZeBrY5Sr7tP7gZ",
  blockchain: "bitcoin"
)

address30 = Address.create(
  portfolio: portfolio10,
  public_key: "bc1q7jrz64f897uk9nhvsguq97dkck4036wu3txm6l",
  blockchain: "bitcoin"
)

address31 = Address.create(
  portfolio: portfolio10,
  public_key: "bc1psxjfhuktm49y5aalnz3dn7lu8wl064lxx3a7csuxmeu9g2yv2peqqah2l4",
  blockchain: "bitcoin"
)

address32 = Address.create(
  portfolio: portfolio11,
  public_key: "bc1q40z2833mvpp239vg0a68um4jczst07sg6czqja",
  blockchain: "bitcoin"
)

address33 = Address.create(
  portfolio: portfolio12,
  public_key: "bc1qjhx47nwpcqxlyml9236uns4znt5c9420zkf4l5zyr0xj5wn9wytsp992mf",
  blockchain: "bitcoin"
)

address34 = Address.create(
  portfolio: portfolio13,
  public_key: "3B1VRHq5M8xo6zfqFyR6a5XDB2HdXGe7cs",
  blockchain: "bitcoin"
)

puts "Ok pour les Addresses"
