# Ruby Classes and Objects 10/6/2021


# p true.class
# TrueClass

# p false.class
# FalseClass

# p 5.class
# Integer


# class - keyword, name in PascalCase, scope is defined by the keyword end

# class NetflixShow
# end

# p squid = NetflixShow.new
#<NetflixShow:0x00007fde6c835a20>
# p girls = NetflixShow.new

# .new - creates an object, or an instance of a class



# Setters - setting methods
# @ - instance variables, variables that belong to a class
# class NetflixShow
#   def set_title title, run
#     @title = title
#     @run_time = run
#   end
# end

# squid = NetflixShow.new
# squid.set_title 'Squid Game', '60min'
# p squid
#<NetflixShow:0x00007fcb3680cfb0 @title="Squid Game">
# girls = NetflixShow.new
# girls.set_title 'Good Girls', '48min'
# p girls
#<NetflixShow:0x00007fcb3680c948 @title="Good Girls">


# Error messages: wrong number of arguments (given 1, expected 2)


# Getter methods - return info from the class
# class NetflixShow
#   def set_title title, run
#     @title = title
#     @run_time = run
#   end
#   def get_title
#     @title
#   end
#   def get_run_time
#     @run_time
#   end
# end
#
# squid = NetflixShow.new
# # setter method
# squid.set_title 'Squid Game', '60min'
# # getter method
# p squid.get_title
# # => "Squid Game"
#
# girls = NetflixShow.new
# # setter method
# girls.set_title 'Good Girls', '48min'
# # getter method
# p girls.get_run_time
# # => "48min"


# initialize - a class method that runs automatically when you create an new instance of a class
# class NetflixShow
#   def initialize title, run
#     @title = title
#     @run_time = run
#   end
#   def get_title
#     @title
#   end
#   def get_run_time
#     @run_time
#   end
# end
#
# squid = NetflixShow.new 'Squid Game', '60min'
# p squid
# #<NetflixShow:0x00007f90e6853f58 @title="Squid Game", @run_time="60min">
#
# # girls = NetflixShow.new
# # p girls
# # `initialize': wrong number of arguments (given 0, expected 2)
#
# girls = NetflixShow.new 'Good Girls', '48min'
# p girls
# #<NetflixShow:0x00007fcb121077c0 @title="Good Girls", @run_time="48min">



# class NetflixShow
#   def initialize title, run
#     @title = title
#     @run_time = run
#     @watched = false
#     @time_watched = 0
#   end
#   # getter method
#   def get_title
#     @title
#   end
#   # getter method
#   def get_run_time
#     @run_time
#   end
#   # setter method
#   def done_on_watched_it
#     @watched = true
#   end
#   # getter method
#   def show_info
#     if @watched
#       "You have watched the show #{@title} which is #{@run_time}."
#     else
#       "You have not watched the show #{@title} which is #{@run_time}."
#     end
#   end
#   def currently_watching time
#     @time_watched += time
#   end
# end

# squid = NetflixShow.new 'Squid Game', '60min'
# p squid
#<NetflixShow:0x00007fa96789a888 @title="Squid Game", @run_time="60min", @watched=false>
# squid.done_on_watched_it
# p squid
#<NetflixShow:0x00007fa96789a888 @title="Squid Game", @run_time="60min", @watched=true>

# Playing around with how much time has been watched
# p squid.currently_watching 20
# p squid

# girls = NetflixShow.new 'Good Girls', '48min'
# p girls.show_info
# => "You have not watched the show Good Girls which is 48min."
# girls.done_on_watched_it
# p girls.show_info
# => "You have watched the show Good Girls which is 48min."


# attr_accessor - method that creates more methods, it creates setter methods and getter methods, gets passed a symbol - "the thing that is called..."
class NetflixShow

  attr_accessor :title, :run_time, :watched

  def initialize title, run
    @title = title
    @run_time = run
    @watched = false
    @time_watched = 0
  end

  # getter method
  def show_info
    if @watched
      "You have watched the show #{@title} which is #{@run_time}."
    else
      "You have not watched the show #{@title} which is #{@run_time}."
    end
  end

  def currently_watching time
    @time_watched += time
  end

end

squid = NetflixShow.new 'Squid Game', '60min'
p squid.title
# squid.watched = true
# p squid.show_info
# => "You have watched the show Squid Game which is 60min."
