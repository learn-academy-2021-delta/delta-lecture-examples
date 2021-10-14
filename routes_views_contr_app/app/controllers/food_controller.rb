class FoodController < ApplicationController
    def tacos
        # render html: "Austin & Nicole love Torchy's Tacos"
        @our_tacos = "On Delta's taco: Veggies, sour cream, deep-fried avocado, green-chili, salsa, cilantro"
        render 'tacos.html.erb'
    end

    def ox_tail
        @ingredients = ['ox tail', 'haitian epis', 'scotch bonnet', 'onion', 'ketchup', 'garlic']
    end

    def sweet_potato_pie
        
    end

    def home
        
    end
end
