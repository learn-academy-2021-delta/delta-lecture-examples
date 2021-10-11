# Ruby on Rails 10/11/2021


Take Aways from How the Internet Works

Dev - responsible for creating successful request-response cycles

Request
1) Location - url
2) HTTP Verb
  - get - read
  - post - create
  - put - update
  - patch - update
  - delete - delete

Response
3) Status code
4) Payload

- Every request gets a response, even if the response is an error
- JSON (data) - API
- UI (visual markup) - Website


Rails

- Framework written in the Ruby programming language
- Framework is a structure of base code, frameworks dictate the flow of control


MVC Architecture Pattern
- Model, View, Controller
- Architecture is how to organize the different responsibility of your code
- View - what the user sees
- Model - business logic, database layer
- Controller - traffic signal, manages the interaction between the model and the view
- MVC - full-stack application


Checking Rails Version
- $ rails -v
- Rails 6.1.4.1

Making a new Rails App
$ rails new rails_intro -d postgresql -T

- App name should start with a lowercase letter, ideally in snake_case
- Drops the existing db and replaces it with a PostgreSQL db
- Removes the default testing suit

Rails
- DHH, created 2004
- Rails is open-source
- Rails motto - "convention over configuration"
- Pros - can get an app up and running quickly, don't have to worry about design decisions, beginner friendly framework
- Cons - Rails has a hard time scaling, "Rails magic" sometimes the app just does stuff for you, Rails is picky!


EVERY RAILS APP HAS TO HAVE A DATABASE
- $ rails db:create
- $ rails s
- Ctrl-C to stop
- Making a get request to localhost:3000/
- Started GET "/"
