# Ruby Blocks and Iterables 10/4/2021

# Iteration - repeating an action until a condition is met

# Iteration examples - for loop, filter, map, forEach, sort


# While

# num = 1
# while num <= 10
#   p num
#   num += 1
# end

# Need an incrementor otherwise the loop will be infinite
# To stop an infinite loop, control + c

nums = []
num = 1

# while num <= 10
#   nums << num
#   num += 1
# end
#
# p nums
# => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


# Times - gets passed a block defined by the keyword do/end

# Blocks - code functionality that get passed to a method

# 5.times do
#   p 'hello'
# end

# Syntax for writting a one line block
# 5.time {p 'hello'}


# num = 1
# 10.times do
#   p num
#   num += 1
# end


# Each - requires a list to determine the ending condition

# Passing parameters into a block - pipes

# nums = [2, 3, 4, 5, 6]

# nums.each do |value|
#   p value * 3
# end


# Range - creates a sequence

# Starting value and ending value with two dots between creates an inclusive range

# range = 1..5
# range = 'a'..'k'

# range.each do |value|
#   p value.upcase
# end


# nums = 1..10
# p nums
#
# nums.each do |value|
#   if value.even?
#     p 'even'
#   else
#     p 'odd'
#   end
# end


# Map - acts on an iterable (array, range) item and returns an array

# nums = 1..10
#
# mult3 = nums.map do |value|
#   value * 3
# end
#
# p mult3

# Select - acts on an iterable (array or range) and makes a decision about each item, returns an array


# nums = 1..10
#
# only_evens = nums.select do |value|
#   value.even?
# end
#
# p only_evens


# Examples

# Method that takes in range of numbers and returns only odd numbers

def only_odds range
  range.select do |value|
    value.odd?
  end
end

# p only_odds 1..8
# p only_odds 8..17
# p only_odds 100..120


# Method that takes an array of number and returns all the numbers mult by 2

def mult2 array
  array.map do |value|
    value * 2
  end
end

# p mult2 [2, 3, 4, 5]
# p mult2 [5, 6, 7]


# Method that takes in array of words and returns the words that contain the letter e

# words = ['hello', 'yo', 'delta', 'learn', 'hola']

# def contains_e array
#   array.select do |value|
#     value.include?'e'
#   end
# end
#
# p contains_e words

# words = ['hello', 'yo', 'delta', 'LEARN', 'hola']

# def contains_e array
#   array.select do |value|
#     value.include?('e') || value.include?('E')
#   end
# end

# def contains_e array
#   array.select do |value|
#     value.downcase.include?('e')
#   end
# end
#
# p contains_e words


# Method that takes in an array of words and returns whether the length of each string is even or odd

words = ['hello', 'yo', 'delta', 'LEARN', 'hola']

def even_or_odd_length array
  array.map do |value|
    if value.length.even?
      'even'
    else
      'odd'
    end
  end
end

p even_or_odd_length words
