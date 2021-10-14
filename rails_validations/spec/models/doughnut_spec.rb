require 'rails_helper'

RSpec.describe Doughnut, type: :model do
  it 'is not valid without a kind' do
    glazed = Doughnut.create(topping: 'glazed with sprinkles', count: 5)
    expect(glazed.errors[:kind]).to_not be_empty
  end
  it 'is not valid without a topping' do
    glazed = Doughnut.create(kind: 'glazed', count: 5)
    expect(glazed.errors[:topping]).to_not be_empty
  end
  it 'is not valid without a count' do
    glazed = Doughnut.create(kind: 'glazed', topping: 'glaze with sprinkles')
    expect(glazed.errors[:count]).to_not be_empty
  end
  it 'must have a unique kind' do
    glazed1 = Doughnut.create(kind: 'glazed', topping: 'glaze with sprinkles', count: 4)
    glazed2 = Doughnut.create(kind: 'glazed', topping: 'glaze with sprinkles', count: 4)
    expect(glazed2.errors[:kind]).to_not be_empty
  end
  it 'must have numerciality for count' do
    glazed = Doughnut.create(kind: 'glazed', topping: 'glaze with sprinkles', count: 'yo')
    expect(glazed.errors[:count]).to_not be_empty
  end
  it 'must be whole doughnuts' do
    glazed = Doughnut.create(kind: 'glazed', topping: 'glaze with sprinkles', count: 0.5)
    expect(glazed.errors[:count]).to_not be_empty
  end
end
