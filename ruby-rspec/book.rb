# RSpec 10/7/2021

# ~/Desktop/learn/delta-lecture-examples/ruby-rspec
# delta-lecture-example: repository
# folder/directory - mean the same thing
# ruby-rspec: folder for project, inside the repo
# files: book.rb - code is stored, book_spec.rb - tests are stored

# Install Rspec
# $ gem install rspec

# gem - packages for Ruby

# $ rspec book_spec.rb

# TDD - test driven development
# red-green-refactor - write the test first, see the test fail (red), write the code to make the test pass (green), refactor your code with confidence

# 1) Create a book class
# 2) Book should have a title
# 3) Book should have an author, default should be anonymous
# 4) Book should have a current page, page start at 1
# 5) Book can be read, move pages forward

class Book
  attr_accessor :title, :author, :page
  def initialize
    @title = title
    @author = 'anonymous'
    @page = 1
  end
  def read pages_read
    @page += pages_read
    # @page = @page + pages_read
  end
end
