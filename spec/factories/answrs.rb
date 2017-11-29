FactoryBot.define do
  factory :answer do
    body 'MyText1'
    question
    user
  end

  factory :invalid_answer, class: 'Answer' do
    body nil
    question
  end
end