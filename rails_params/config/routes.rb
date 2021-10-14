Rails.application.routes.draw do
  get '/christmas/:style' => 'sweater#christmas'
  get '/quantity/:number' => 'sweater#quantity'
  get '/outerwear/:sweaters/:hoodies/:mittens' => 'sweater#outerwear'
end
