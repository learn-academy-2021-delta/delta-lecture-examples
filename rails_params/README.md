# Rails Params 10/14/2021

Setup:
- $ rails new rails_params -d postgresql -T -G
- cd into project
- $ rails db:create
- $ rails g controller Sweater


Started with hard coded string
```ruby
def christmas
  @christmas_sweater = 'Christmas sweater with extra sparkles'
end
```

Refactor to Using Params:
```ruby
def christmas
  @christmas_sweater = params[:style]
end
```
Parameter query: we can change the value of the param `:style`
url: http://localhost:3000/christmas?style=ugly_sweater


Refactor to Ensure We Get Params:
```ruby
Rails.application.routes.draw do
  get '/christmas/:style' => 'sweater#christmas'
end
```
url: http://localhost:3000/christmas/ugly

Param hash in console:
Parameters: {"style"=>"ugly"}


Number of Sweaters
def quantity
  @christmas_sweater_quantity = params[:number]
end
url: http://localhost:3000/quantity/8
Parameters: {"number"=>"8"}
Params are always the data type string



def quantity
  @christmas_sweater_quantity = params[:number]
  if @christmas_sweater_quantity > 10
    @output = 'a drawerful'
  else
    @output = @christmas_sweater_quantity
  end
end
<h3>I have <%= @output %> christmas sweaters.</h3>



Parameters: {"sweaters"=>"snowman", "hoodies"=>"roudolph", "mittens"=>"snowflake"}
