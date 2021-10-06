class OrderApp
    attr_accessor :user, :order
    attr_reader :shop
    # attr_reader
    # attr_writer 
    def initialize(user_param,shop_param, order_param="")
        @shop = shop_param
        @user = user_param
        @order = order_param
    end
    def get_info
      p "An order from #{@user} to the #{@shop} shop for #{@order}"
    end
end

# t_shirt = OrderApp.new('Donut Tee', 'Austin', '1 RIP Pop up headlights')
# p t_shirt.shop
# t_shirt.get_info

class TshirtOrderApp < OrderApp
    attr_accessor :style_of_shirts, :number_of_shirts
    def initialize(user_param, shop_param, style_param, number_param=1)
        # SUPER takes the arguments needed by the parents initialize method in the same order
        super(user_param, shop_param)
        @style_of_shirts = style_param
        @number_of_shirts = number_param
    end

    def get_tshirt_order_info
       p "An order for #@number_of_shirts #@style_of_shirts shirst for #@user from #@shop"
    end


end

# austin = TshirtOrderApp.new("dontut media", "Austin", "pop up headlights")
# charlean = TshirtOrderApp.new( "Disney", "Charlean", "My Little Ponies", 4)
# sahtra = TshirtOrderApp.new("Cat", "Sahtra", "eat", 24)
# ashley = TshirtOrderApp.new("Hot Topic", "Ashley" "I am Sad ", 3)
# rob = TshirtOrderApp.new("Booghee Tees", "Rob", "Good @$$ Dinner", 11)

# charlean.get_tshirt_order_info
# p rob.number_of_shirts << 100
# p rob.number_of_shirts + 100
# p rob.number_of_shirts = 111
# p rob.number_of_shirts = "hello"


class GoodAssDinnerApp < OrderApp
    attr_accessor :scent, :size, :wick, :color, :burn_time
    def initialize(user_param, shop_param="Good Ass Dinner")
                # SUPER takes the arguments needed by the parents initialize method in the same order

        super(user_param, shop_param)
        @scent = ""
        @wick = 1
        @size = "small"
        @color = ""
        @burn_time = 8
    end
    def set_order(scent_param, wick_param, size_param, color_param, burn_time_param=8)
        @scent = scent_param
        @wick = wick_param
        @size = size_param
        @color = color_param
        @burn_time = burn_time_param
    end
    def get_order
        if @scent == ""
            p "You should choose a candle, checkout our selection"
        else
            p "#@user ordered a #@size #@color #@scent scented candle with #@wick wick(s) and a burn time of #@burn_time hours "
        end
    end
end

candle_order_one = GoodAssDinnerApp.new("rob")
candle_order_one.set_order("fried chicken", 3, "Big Ass", "brown", 24)
candle_order_one.get_order
