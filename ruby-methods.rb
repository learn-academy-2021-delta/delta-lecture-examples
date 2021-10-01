# Ruby Methods 10/1/2021

# What is the difference between a function and a method?
# - Function - chunk of code logic
# - Method - Function that belongs to class/object


# def greeter
#   'Hello World!'
# end
#
# p greeter

# Method:
# - def - define the method
# - name - snake_case
# - end - to define the block of code
# - inner workings

# Implicit return - Ruby will return the last line of the method unless you say otherwise

# Passing in a parameter:
# def greeter name
#   "Hello, #{name}"
# end
#
# p greeter "Ato"
# p greeter "Ashley"
# p greeter "Ross"

# Passing in multiple parameters:

# def multiply(num1, num2)
#   num1 * num2
# end



def greater(num1, num2)
  if num1 > num2
    "#{num1} is greater"
  elsif num1 < num2
    "#{num2} is greater"
  else
    'The numbers are the same'
  end
end

p greater(3, 7)
p greater(3, 3)
p greater(8, 3)
