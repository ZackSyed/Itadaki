# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Split.destroy_all
Interaction.destroy_all
Group.destroy_all
Tab.destroy_all
Friend.destroy_all
User.destroy_all

greg = User.create(username: 'yeezyyeezywatsgud', email: 'ye@ye.ye', password: 'silversurfer')
francisco = User.create(username: 'professional', email: 'superserious@email.com', password: 'somethingsafe')
gary = User.create(username: 'kangaree', email: 'kang@ree.com', password: 'kangaree')
demo = User.create(username: 'demo_user', email: 'demo@demo.com', password: 'thisIspassword')


