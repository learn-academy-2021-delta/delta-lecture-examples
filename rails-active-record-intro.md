# Rails Active Record Intro 10/11/2021

ORM
- Active Record is an ORM
- Object Relational Mapping
- SQL queries interact with a database, Rails is written in the Ruby programming language
- How do we interact with the database in Rails? Active Record -> translator between SQL/Ruby
- Allows us to write SQL queries in Ruby code


Database in the Rails App
- Starts off empty
- Add a table, databases can have many tables
- Need a way to tell Rails to create the database, column headers and data types
- 1) Generate commands - a collection of commands that changes the structure of a Rails app, and allows Rails to be in charge of how that happens
- 2) Column headers can be called (almost) whatever we want, Active Record data types

```
The ActiveRecord data types available in Rails 6;
:primary_key
:string: short text
:text: long text
:integer: whole numbers [-4, 0, 9, 772]
:float: double-precision floating-point numbers [3244.90]
:decimal: high-precision floating-point numbers [3244.2342343789212]
:datetime
:time
:date
:binary: 1 / 0
:boolean: true or false
```

Rails Generate Command:
- Rails is picky, it has to be exactly this structure
- rails generate - the command that modifies the Rails file structure
- model - the thing we are making
- Schedule - model class or table name (PascalCase)
- column_name:datatype
- $ rails generate model Schedule day:string event_date:date event_name:string
- the command creates a model class and migration
- migrations are how you interact with the database

Migrate
- $ rails db:migrate
- creates a schema
- schema is a snapshot of the database structrue

Rails Console
- $ rails c
- allows us to interact with the database

Active Record query
- Schedule.all
- returns an array: #<ActiveRecord::Relation []>
- Maps to SQL query: SELECT * FROM schedules

Creating new data
- Schedule.create(day: 'Tuesday', event_date: '2021-10-12', event_name: 'Yoga')
- Schedule.all
- [#<Schedule id: 1, day: "Tuesday", event_date: "2021-10-12", event_name: "Yoga", created_at: "2021-10-11 22:49:37.593949000 +0000", updated_at: "2021-10-11 22:49:37.593949000 +0000">]
- Rails will automatically create a primary key

CRUD Actions
- Read - display data
  - See all the things - returns an array
    - Schedule.all
  - See one thing - returns a single instance
    - Schedule.first
    - Schedule.last
    - Schedule.find 2  can find an item by the primary key
  - See a set of things - returns an array
    - Schedule.where day: 'Thursday'
- Create - add new things to the db
  - Schedule.create(day: 'Tuesday', event_date: '2021-10-12', event_name: 'Yoga')
- Update - edit existing items
  - If you are going to update something, you have to know which item you are going to update
    - yoga = Schedule.first
    - yoga.update event_name: 'Virtual Yoga with LEARN'
    - wb = Schedule.where event_name: 'White boarding practice'
    - wb.update event_name: 'White Boarding'
- Delete
  - If you are going to delete something, you have to know which item you are going to delete
    - assessments = Schedule.find 3
    - assessments.destroy
