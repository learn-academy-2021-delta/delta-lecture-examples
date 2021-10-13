class Doughnut < ApplicationRecord
  validates :kind, :topping, :count, presence: true
  validates :kind, uniqueness: true
  validates :count, numericality: { only_integer: true }
end
