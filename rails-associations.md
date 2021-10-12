# Rails Associations 10/12/2021

Set up
- $ rails new associations -d postgresql -T
- $ rails db:create
- $ rails s   to check and make sure the app is running, control + c to shut down the server


Generate a Model for Cohort
- $ rails g model Cohort name:string year:string
- $ rails db:migrate

Add Some Info to the Cohort Table
- $ rails c (interacting with the db in the rails console)
- Cohort.create name: 'Delta', year: '2021'
- Cohort.create name: 'Charlie', year: '2021'
- Cohort.create name: 'Bravo', year: '2021'
- Cohort.all (returns an array of db instances)
- exit (back to the file structure)

Generate a Model for Student
- Cohort has many Student and Student belongs to a Cohort
- Student has the foreign key
- Foreign key column is named cohort_id:integer
- $ rails g model Student name:string cohort_id:integer
- $ rails db:migrate

Create a Relationship
- Foreign key column (belongs to side)
- Define the relationship in the model classes
- When creating a new student it has to be connected to one particular cohort

app/models/student.rb
class Student < ApplicationRecord
  belongs_to :cohort
end

app/models/cohort.rb
class Cohort < ApplicationRecord
  has_many :students
end

Adding Some Info to the Student Table
- delta = Cohort.first (select a cohort)
- delta.students.create name: 'Ross'
- #<Student id: 1, name: "Ross", cohort_id: 1, created_at: "2021-10-12 22:01:42.839157000 +0000", updated_at: "2021-10-12 22:01:42.839157000 +0000">
- bravo.students.create name: 'Erik'

- delta.students
[#<Student id: 1, name: "Ross", cohort_id: 1, created_at: "2021-10-12 22:01:42.839157000 +0000", updated_at: "2021-10-12 22:01:42.839157000 +0000">, #<Student id: 2, name: "Phil", cohort_id: 1, created_at: "2021-10-12 22:04:03.452510000 +0000", updated_at: "2021-10-12 22:04:03.452510000 +0000">, #<Student id: 3, name: "Kelly", cohort_id: 1, created_at: "2021-10-12 22:04:40.386139000 +0000", updated_at: "2021-10-12 22:04:40.386139000 +0000">]>


Adding a student to Charlie
c = Cohort.second
c.students.create name: 'Heather'


Student.all

=> #<ActiveRecord::Relation [#<Student id: 1, name: "Ross", cohort_id: 1, created_at: "2021-10-12 22:01:42.839157000 +0000", updated_at: "2021-10-12 22:01:42.839157000 +0000">, #<Student id: 2, name: "Phil", cohort_id: 1, created_at: "2021-10-12 22:04:03.452510000 +0000", updated_at: "2021-10-12 22:04:03.452510000 +0000">, #<Student id: 3, name: "Kelly", cohort_id: 1, created_at: "2021-10-12 22:04:40.386139000 +0000", updated_at: "2021-10-12 22:04:40.386139000 +0000">, #<Student id: 4, name: "Erik", cohort_id: 3, created_at: "2021-10-12 22:08:17.262992000 +0000", updated_at: "2021-10-12 22:08:17.262992000 +0000">, #<Student id: 5, name: "Ato", cohort_id: 1, created_at: "2021-10-12 22:25:56.179631000 +0000", updated_at: "2021-10-12 22:25:56.179631000 +0000">, #<Student id: 6, name: "Heather", cohort_id: 2, created_at: "2021-10-12 22:27:53.507344000 +0000", updated_at: "2021-10-12 22:27:53.507344000 +0000">]> 
