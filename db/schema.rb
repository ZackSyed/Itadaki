# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_20_012027) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "friends", force: :cascade do |t|
    t.integer "friend_id", null: false
    t.integer "user_id", null: false
    t.boolean "accepted", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["friend_id", "user_id"], name: "index_friends_on_friend_id_and_user_id", unique: true
    t.index ["friend_id"], name: "index_friends_on_friend_id"
    t.index ["user_id"], name: "index_friends_on_user_id"
  end

  create_table "groups", force: :cascade do |t|
    t.string "group_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "interactions", force: :cascade do |t|
    t.integer "group_id", null: false
    t.integer "user_id", null: false
    t.index ["group_id"], name: "index_interactions_on_group_id"
    t.index ["user_id", "group_id"], name: "index_interactions_on_user_id_and_group_id"
    t.index ["user_id"], name: "index_interactions_on_user_id"
  end

  create_table "splits", force: :cascade do |t|
    t.integer "tab_id", null: false
    t.integer "user_id", null: false
    t.integer "amount_owed"
    t.boolean "paid", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tab_id"], name: "index_splits_on_tab_id"
    t.index ["user_id"], name: "index_splits_on_user_id"
  end

  create_table "tabs", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "settled", default: false
    t.integer "total", null: false
    t.integer "group_id", null: false
    t.integer "lender_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id"], name: "index_tabs_on_group_id"
    t.index ["lender_id"], name: "index_tabs_on_lender_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username", "email"], name: "index_users_on_username_and_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
