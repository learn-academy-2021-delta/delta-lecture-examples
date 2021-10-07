# book_spec.rb

require 'rspec'
require_relative 'book'
require_relative 'library'

# curly braces are testing behavior
# parentheses are testing data

describe 'Book' do
  it 'has to be real' do
    expect{ Book.new }.to_not raise_error
  end
  it 'has a title' do
    my_book = Book.new
    my_book.title = 'Catch 22'
    expect(my_book.title).to eq 'Catch 22'
    expect(my_book.title).to be_a String
  end
  it 'has a author' do
    my_book = Book.new
    expect(my_book.author).to eq 'anonymous'
    my_book.author = 'Joseph Heller'
    expect(my_book.author).to eq 'Joseph Heller'
    expect(my_book.author).to be_a String
  end
  it 'has a current page' do
    my_book = Book.new
    expect(my_book.page).to eq 1
    expect(my_book.page).to be_a Integer
  end
  it 'can read pages' do
    my_book = Book.new
    expect{ my_book.read 10 }.to change { my_book.page }.from(1).to(11)
    expect{ my_book.read 5 }.to change { my_book.page }.from(11).to(16)
  end
end

describe 'Library' do
  it 'has to be real' do
    expect{ Library.new }.to_not raise_error
  end
  it 'has a collection of books' do
    my_library = Library.new
    expect(my_library.book_collection).to be_a Array
  end
  it 'has books in the collection' do
    my_library = Library.new
    book1 = Book.new
    book2 = Book.new
    book3 = Book.new
    my_library.add_book book1
    my_library.add_book book2
    my_library.add_book book3
    expect(my_library.book_collection).not_to be_empty
    expect(my_library.book_collection).to contain_exactly(book1, book2, book3)
  end
end
