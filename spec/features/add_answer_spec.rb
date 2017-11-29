require 'rails_helper'

feature 'Add answer' do

  given(:user) { create(:user) }
  let(:question) { create(:question) }
  let(:answer) { create (:answer) }

  scenario 'Add valid answer' do
    sign_in(user)
    visit question_path(question)
    fill_in 'answer_body', with: answer.body
    click_on 'Create Answer'
    expect(page).to have_content(answer.body)
  end

  scenario 'Add invalid answer' do
    sign_in(user)
    visit question_path(question)
    click_on 'Create Answer'
    expect(page).to have_css('div#error_explanation')
  end
end