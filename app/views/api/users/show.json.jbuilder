json.partial! "api/users/user", user: @user
json.set! :friends, json.array! user.friends.id 