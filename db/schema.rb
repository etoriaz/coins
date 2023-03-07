# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_07_104631) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.bigint "portfolio_id", null: false
    t.string "public_key"
    t.string "blockchain"
    t.integer "balance"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["portfolio_id"], name: "index_addresses_on_portfolio_id"
  end

  create_table "bookmarks", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "portfolio_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["portfolio_id"], name: "index_bookmarks_on_portfolio_id"
    t.index ["user_id"], name: "index_bookmarks_on_user_id"
  end

  create_table "message_votes", force: :cascade do |t|
    t.integer "vote"
    t.bigint "user_id", null: false
    t.bigint "portfolio_message_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["portfolio_message_id"], name: "index_message_votes_on_portfolio_message_id"
    t.index ["user_id"], name: "index_message_votes_on_user_id"
  end

  create_table "portfolio_messages", force: :cascade do |t|
    t.bigint "portfolio_id", null: false
    t.bigint "user_id", null: false
    t.string "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["portfolio_id"], name: "index_portfolio_messages_on_portfolio_id"
    t.index ["user_id"], name: "index_portfolio_messages_on_user_id"
  end

  create_table "portfolios", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_portfolios_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "addresses", "portfolios"
  add_foreign_key "bookmarks", "portfolios"
  add_foreign_key "bookmarks", "users"
  add_foreign_key "message_votes", "portfolio_messages"
  add_foreign_key "message_votes", "users"
  add_foreign_key "portfolio_messages", "portfolios"
  add_foreign_key "portfolio_messages", "users"
  add_foreign_key "portfolios", "users"
end
