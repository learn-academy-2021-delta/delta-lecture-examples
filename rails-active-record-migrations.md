# Active Record Migrations

A migration is a file that is generated through a rails command that specifically allow us to make updates to the database

```
snake_case
$ rails generate migration add_name_to_instruments

PascalCase
$ rails generate migration AddNameToInstruments
```

# Overview of process
    - generate migration
    - update migration file
    - migrate the database
    - update your data


# Commands in Order
### rails new 
$ rails new instrument_app -d postgresql -T
### cd into app
$ cd instrument_app
### create our database
$ rails db:create
        In case of emergency $ rails db:drop
### create model 
$ rails generate model Instrument 
### migrate the db
$ rails db:migrate
### generate migration
$ rails generate migration add_name_to_instruments

### add code to the rails/ruby file
add_column :table, :column, :datatype
- add_column :instruments, :name, :string

#### jump over to rails console
$ rails c
$ rails Instrument.create x 5
$ Instrument.all
$ exit

#### jump back to the rails application

### create migration

$ rails g migration add_column_to_instrument

- add_column :instruments, :price, :number

 ### migrate
$ rails db:migrate

#### jump over to rails console
$ rails c

### Rinse Repeat as needed
