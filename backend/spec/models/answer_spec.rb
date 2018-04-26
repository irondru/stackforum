require 'rails_helper'

RSpec.describe Answer, type: :model do
  it 'validates belongs to question' do
    expect(Answer.new(body: 'test')).to_not be_valid
  end

  it 'validates presence of body' do
    expect(Answer.new(question: Question.new(title: 'test', body: 'test'))).to_not be_valid
  end
end