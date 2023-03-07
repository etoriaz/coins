# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Création des seeds"
User.destroy_all
Adresse.destroy_all
Transaction.destroy_all
Portfolio.destroy_all
MessageVote.destroy_all
PortfolioMessage.destroy_all
puts "Database cleaned"



###USERS###

user1 = User.create(
  username = "antoine12"
  email = "antoine12@gmail.com"
  password = "iwantcoins"
)

user2 = User.create(
  username = "marcel43"
  email = "marcel43@gmail.com"
  password = "iwantcoins"
)

user3 = User.create(
  username = "henri92"
  email = "henri92@gmail.com"
  password = "iwantcoins"
)

user4 = User.create(
  username = "martine34"
  email = "martine34@gmail.com"
  password = "iwantcoins"
)

user5 = User.create(
  username = "bernard67"
  email = "bernard67@gmail.com"
  password = "iwantcoins"
)

puts "Ok pour les users"

###PORTFOLOIOS###

portfolio1 = Portfolio.create(
  name = "top crypto trader"
)

portfolio2 = Portfolio.create(
  name = "top trader btc"
)

portfolio3 = Portfolio.create(
  name = "vitalik btc"
)

portfolio4 = Portfolio.create(
  name = "hasheur btc"
)

portfolio5 = Portfolio.create(
  name = "my father btc"
)

portfolio6 = Portfolio.create(
  name = "family crypto"
)

portfolio7 = Portfolio.create(
  name = "my main portfolio"
)

portfolio8 = Portfolio.create(
  name = "sunday fun"
)

portfolio9 = Portfolio.create(
  name = "winter time"
)

portfolio10 = Portfolio.create(
  name = "secondary one"
)

portfolio11 = Portfolio.create(
  name = "my last portfolio"
)

portfolio12 = Portfolio.create(
  name = "other crypto btc"
)

puts "Ok pour les portfolios"

###ADRESSES###

adress1 = Adress.create(
  public_key = "bc1q5crsrfueudwyfekpmcaqgzhqzxpedqersmtazt"
  blockchain = "bitcoin"
)

adress2 = Adress.create(
  public_key = "bc1pajfaj0ddu9ny6v3gt82wa042xcztud7e0djms3ndyxa2hsfk7dgshnt500"
  blockchain = "bitcoin"
)

adress3 = Adress.create(
  public_key = "bc1pwcqxzl9ufgje2ua29k299dy9zqa6cjwwmz5khxwjqche4swenf0smay4kw"
  blockchain = "bitcoin"
)

adress4 = Adress.create(
  public_key = "bc1qd83p8v5nrn5z2dp9fgfgds75g9tu984fsv7gjv"
  blockchain = "bitcoin"
)

adress5 = Adress.create(
  public_key = "bc1q7vf0cy9vjl2tfyk7228rynv5tk96xyp0n52yac"
  blockchain = "bitcoin"
)

adress6 = Adress.create(
  public_key = "12ypg5Z2v5vM7mzdtcwgqN6K6HrcZQej7f"
  blockchain = "bitcoin"
)

adress7 = Adress.create(
  public_key = "bc1qg7prtksujecuesd9eclqyjmqfte87sjrvpn6cs"
  blockchain = "bitcoin"
)

adress8 = Adress.create(
  public_key = "bc1qw4ypfsepqumaxj6ssfaxpzqkxkv032ty0vhm4u"
  blockchain = "bitcoin"
)

adress9 = Adress.create(
  public_key = "bc1q8vts7mmjjrsg6xflkyzvcx04ru635m4x857jsr"
  blockchain = "bitcoin"
)

adress10 = Adress.create(
  public_key = "1KK954BCS4NuKmpPAVDeCbRQSL3Sxn7kTq"
  blockchain = "bitcoin"
)

adress11 = Adress.create(
  public_key = "1962C9B87A1okeJw6QkvwR66rAMRaphaRG"
  blockchain = "bitcoin"
)

adress12 = Adress.create(
  public_key = "19xTdBiTgdr13Mopsj3vihE7xGBAajckLY"
  blockchain = "bitcoin"
)

puts "Ok pour les adresses"
