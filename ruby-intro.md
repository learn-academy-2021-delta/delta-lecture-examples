# Ruby 9/30/2021

Ruby - dynamic, scripting, open-source, oop

Matz - creator of Ruby
MINASWAN

Dynamically typed - can create a variable of whatever data type and reassign it to be another data type

Scripting language - general purpose logic language

Ruby does not support type coercion

Open-source - the code base is on line and can be modified by anyone

OOP - object-oriented programming, EVERYTHING in a object, an instance of a class

Ruby Console
irb
exit - brings you back to your reg terminal


Data Types

Integers - whole number
- Numbers in Ruby, preform math operations

:002 > 2 + 3
=> 5
:003 > 3 - 2
=> 1
:004 > 4 * 3
=> 12
:005 > 4 / 2
=> 2
:006 > 4 ** 3
=> 64
:007 > 5 % 3
=> 2

Float - partial numbers
:010 > 5/3
=> 1
:011 > 5/3.0
=> 1.6666666666666667


String
Style guide says: single quotes
'hello'
Can use double quotes if you need punctuation: "hello y'all"


Boolean
true/false

equality operators
:005 > 4 == 4
=> true
:006 > 4 == '4'
=> false

relational operators
:007 > 4 < 5
=> true
:008 > 5 > 3
=> true
:009 > 4 >= 4
=> true
:010 > 4 <= 5
=> true

logical operators
logical and &&
:011 > 'hi' == 'hi' && 6 > 4
=> true
:012 > 'hi' == 'hi' && 6 > 9
=> false
:015 > 'hi' == 'hi' || 6 > 9
=> true
negation with the bang operator
:017 > 4 != 5
=> true
:018 > !true
=> false

Nil
The Ruby version of null

Symbols
Unique identifiers in key value pairs

Variables

casing convention - snake_case
no variable declarations

camelCase
kebab-case
PascalCase

my_name = 'Sarah'

String interpolation:
"Hi, my name is #{my_name}"
Double quotes
#{variable_here}


Methods
Accessor method by default

:030 > my_name
=> "Sarah"
:031 > my_name.length
=> 5
:032 > my_name.upcase
=> "SARAH"
:033 > my_name.capitalize
=> "Sarah"
:034 > my_name.reverse
=> "haraS"
:035 > my_name
=> "Sarah"

Some methods will take arguments and some won't
Ruby doesn't require parentheses, but it is a good idea to use them
:036 > my_name.delete 'h'
=> "Sara"
:037 > my_name.delete('h')
=> "Sara"

Some methods have question marks - these methods will return Boolean values

:038 > my_name.include?('S')
=> true
:039 > my_name.include?('s')
=> false
:041'> my_name.include?('S' 'a')
=> true
:042 > my_name.include?('S' 't')
=> false

Checking the class
:045 > my_name.class
=> String
:046 > 5.0.class
=> Float
:047 > true.class
=> TrueClass
:048 > false.class
=> FalseClass
:049 > nil.class
=> NilClass

Changing Data Types
:050 > 4.to_s
=> "4"
:051 > '9'.to_i
=> 9

Can make methods mutators using the bang operator
:053 > my_name.reverse!
=> "haraS"
:054 > my_name
=> "haraS"

Can chain methods
:061 > my_name.reverse.delete('S')
=> "arah"

Arrays

my_nums = [2, 3, 4, 5, 6]
=> [2, 3, 4, 5, 6]
:005 > my_nums[0]
=> 2
:006 > my_nums[1]
=> 3
:007 > my_nums.length
=> 5
:008 > my_nums.first
=> 2
:009 > my_nums.last
=> 6
:010 > my_nums.reverse
=> [6, 5, 4, 3, 2]
:011 > my_nums.reverse.first
=> 6
:012 > my_nums
=> [2, 3, 4, 5, 6]


Permanently Modify an Array
:014 > my_nums[3] = 99
=> 99
:015 > my_nums
=> [2, 3, 4, 99, 6]
:016 > my_nums << 22
=> [2, 3, 4, 99, 6, 22]
