# Ruby Conditionals 10/1/2021

# In terminal $ ruby file-name.rb
# puts 'hello world'
# Comments in Ruby - same shortcut command + /

# p 'hello world'

# print 'hello world'
# print 'hello world'
# print 'hello world'

num = 20

# if num > 20
#   p "#{num} is greater than 20"
# end

# if num > 20
#   p "#{num} is greater than 20"
# else
#   p "#{num} is less than 20"
# end

# if num > 20
#   p "#{num} is greater than 20"
# elsif num == 20
#   p 'The number is 20'
# else
#   p "#{num} is less than 20"
# end


# if/elsif/else/end
# Error messages - ruby-conditionals.rb:34: syntax error, unexpected end-of-input, expecting `end'
# Missing an end



# Input in the terminal

# gets - collects info from the user in the terminal
# can save that info as a variable
# .chomp removes any non-string characters like line breaks

# name = gets.chomp

# p "Hello, #{name}"

puts 'Choose a number between 1 and 3'

answer = gets.chomp.to_i

if answer == 1
  p 'You will have a wonderful day'
elsif answer == 2
  p 'You are a really nice person'
elsif answer == 3
  p 'Wow, you are a great developer'
else
  p 'Something went wrong'
end
