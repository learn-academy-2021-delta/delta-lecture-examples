# Full Stack Rails 10/14/2021

Setup:
- $ rails new rails_full_stack -d postgresql -T -G
- $ cd rails_full_stack
- $ rails db:create
- $ rails g model Herb name:string is_watered:string
- $ rails db:migrate


Add some data in the Rails console:
- Herb.create name: 'Basil', is_watered: 'yes'
- Herb.create name: 'Cilantro', is_watered: 'no'
- Herb.create name: 'Oregano', is_watered: 'yes'

Add a controller:
- $ rails g controller Herb


## Index
1. Controller
```ruby
def index
  @herbs = Herb.all
end
```
2. Route: `get '/herbs' => 'herb#index'`
3. View: index.html.erb
```
<ul>
  <% @herbs.each do |herb| %>
    <li><%= herb.name %></li>
  <% end %>
</ul>
```
- url: http://localhost:3000

## Show
1. Controller
```ruby
def show
  @herb = Herb.find(params[:id])
end
```
2. Route: `get '/herbs/:id' => 'herb#show'`
3. View: show.html.erb
- url: http://localhost:3000/herbs/1
```
<h3>Just One Herb</h3>
<p>Name: <%= @herb.name %></p>
<p>Is watered: <%= @herb.is_watered %></p>
```

- Adding routing aliases:
```ruby
get '/herbs' => 'herb#index', as: 'herbs'
get '/herbs/:id' => 'herb#show', as: 'herb'
```
- From Show to Index: `<%= link_to "Back to All Herbs", herbs_path %>`
- From Index to Show: `<%= link_to herb.name, herb_path(herb) %>`

## New
1. Controller
```ruby
def new
  @herb = Herb.new
end
```
2. Route: `get 'herbs/new' => 'herb#new', as: 'new_herb'`
3. View: new.html.erb
- url: http://localhost:3000/herbs/new
```
<%= form_with model: @herb, local: true do |form| %>
  <%= form.label :name %>
  <%= form.text_field :name %>
  <%= form.label :is_watered %>
  <%= form.text_field :is_watered %>
  <%= form.submit "Add Herb" %>
<% end %>
```

- Added nav from index to new: `<p><%= link_to "Add New Herb", new_herb_path %></p>`

## Create
1. Controller
```ruby
def create
  @herb = Herb.create(herb_params)
end
# anything below the word private cannot be accessed outside the scope of this class
private
# strong params method
def herb_params
  params.require(:herb).permit(:name, :is_watered)
end
```
2. Route: `post '/herbs' => 'herb#create'
3. View (what happens after) - redirect`
```ruby
def create
  @herb = Herb.create(herb_params)
  if @herb.valid?
    redirect_to herbs_path
  else
    redirect_to new_herb_path
  end
end
```

## Edit
1. Controller
```ruby
def edit
  @herb = Herb.find(params[:id])
end
```
2. Route: `get '/herbs/:id/edit' => 'herb#edit', as: 'edit_herb'`
3. View: edit.html.erb
```
<h3>Update an Herb</h3>
<%= form_with model: @herb, local: true, method: :patch do |form| %>
  <%= form.label :name %>
  <%= form.text_field :name %>
  <br />
  <br />
  <%= form.label :is_watered %>
  <%= form.text_field :is_watered %>
  <br />
  <br />
  <%= form.submit "Update Herb" %>
<% end %>
```

- Added nav from show to edit: `<%= link_to "Update Herb", edit_herb_path(@herb) %>`

## Update
1. Controller
```ruby
def update
  @herb = Herb.find(params[:id])
  @herb.update(herb_params)
end
```
2. Route: `patch '/herbs/:id' => 'herb#update'`
3. View (what happens after) - redirect
```ruby
def update
  @herb = Herb.find(params[:id])
  @herb.update(herb_params)
  if @herb.valid?
    redirect_to herb_path(@herb)
  else
    redirect_to edit_herb_path
  end
end
```

## Destroy
1. Controller
```ruby
def destroy
  @herb = Herb.find(params[:id])
  @herb.destroy
end
```
2. Route: `delete '/herbs/:id' => 'herb#destroy', as: 'delete_herb'`
3. View: `<%= link_to 'Delete Herb', delete_herb_path(@herb), method: :delete %>`
- Adding redirect
```ruby
def destroy
  @herb = Herb.find(params[:id])
  if @herb.destroy
    redirect_to herbs_path
  else
    redirect_to herb_path(@herb)
  end
end
```
- Adding an alert confirmation: `<%= link_to 'Delete Herb', delete_herb_path(@herb), method: :delete, data: { confirm: 'Are you sure you want to delete this herb?'} %>`
