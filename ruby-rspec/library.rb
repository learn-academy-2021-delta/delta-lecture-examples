# library.rb

# 1) Create a class called Library
# 2) Library has a collection of books
# 3) The collection has books

class Library
  attr_accessor :book_collection
  def initialize
    @book_collection = []
  end
  def add_book book
    @book_collection << book
  end
end
