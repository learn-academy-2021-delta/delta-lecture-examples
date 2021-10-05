# Ruby Hashes 10/4/2021


# Hash is a data structure in Ruby

# learn_staff = {instructor: 'Austin', career: 'Jake', marketing: 'TJ'}

# p learn_staff

# {:instructor=>"Austin", :career=>"Jake", :marketing=>"TJ"}

# key: value pairs
# key is a symbol
# Reference a symbol - :instructor
# Hash rocket =>

# Another way to create a hash
testing = Hash.new
# .new creates an instance (object, real thing) from a class (blueprint)
# p testing


# Actions a dev would want to perform
# - return info, read info
# - create new info
# - update existing content
# - delete or remove content

learn_staff = {instructor: 'Austin', career: 'Jake', marketing: 'TJ'}

# - return all info:
# p learn_staff

# - return specific values, reference the entire hash and the symbol:
# p learn_staff[:marketing]
# => "TJ"

# - create, add key value pairs to the hash:
learn_staff[:boss_lady] = 'Chelsea'
# p learn_staff
# => {:instructor=>"Austin", :career=>"Jake", :marketing=>"TJ", :boss_lady=>"Chelsea"}
# p learn_staff[:boss_lady]
# => "Chelsea"

# - edit existing information
learn_staff[:instructor] = 'Austin W'
# p learn_staff

# - remove a key value pair from the hash
learn_staff.delete(:career)
# p learn_staff


# Modules - grouping like things that have similar properties
# Enumerable - grouping of things that iterable

# Duck typing - focusing methods on the behavior of the data type rather than the strict definition of the data type

learn_staff.each do |key, value|
  p "#{value}'s job is #{key}"
end
