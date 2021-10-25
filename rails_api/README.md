# Wildlife Tracker Rails API

RESTful Routes (7 - full-stack app)
- Index
- Show
- New
- Edit
- Update
- Destroy
- Create

RESTful Routes (5 - API, data)
- Index - all the things
- Show - find one thing
- Create - add thing
- Update - modify things
- Destroy - remove things


Setup
- $ rails new rails_api -d postgresql -T -G
- $ cd rails_api
- $ rails db:create
- $ bundle add rspec-rails
- $ rails generate rspec:install
- $ rails g resource Student name:string cohort:string
- $ rails db:migrate


Rails Routes from Resource
- $ rails routes

```
Prefix        Verb    URI Pattern               Controller#Action
students      GET    /students(.:format)        students#index
              POST   /students(.:format)        students#create
new_student   GET    /students/new(.:format)    students#new
edit_student  GET    /students/:id/edit(.:format) students#edit
student       GET    /students/:id(.:format)    students#show
              PATCH  /students/:id(.:format)    students#update
              PUT    /students/:id(.:format)    students#update
              DELETE /students/:id(.:format)    students#destroy
```


Rails Console
- Added a few db instances to get started

Postman
- `+` sign in the corner to bring up a new tab with a url bar
- Headers >> key: content-type, value: application/json

API Stories
- Get all the students (JSON format)
  - Controller - index
  - In postman: get localhost:3000/students
- Get one student by id
  - Controller - show
  - In postman: get localhost:3000/students/1
  - If you get HTML back, check the preview tab for an error message
- Create a new student
  - Controller - create, strong params
  - In postman: post localhost:3000/students
  - Body tab, raw button
  ```
  {
    "name": "Rachael",
    "cohort": "Charlie"
  }
  ```
  - Add some code ApplicationController: skip_before_action :verify_authenticity_token
- Remove a student
  - Controller - destroy
  - In postman: delete localhost:3000/1
- Modify a student
  - Controller - update
  - In postman: patch localhost:3000/3
  - Body tab, raw button
  ```
  {
    "name": "Todd C",
    "cohort": "Charlie"
  }
  ```
