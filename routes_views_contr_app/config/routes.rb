Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #  http_verb '/name_of_route' => 'name_of_controller#name_of_method'
  get '/tacos' => 'food#tacos'
  get '/ox_tail' => 'food#ox_tail'
  get '/pie' => 'food#sweet_potato_pie'
  get '/' => 'food#home'
end
