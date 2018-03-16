require_relative 'features_helper'

feature 'Add answer' do

  given(:user) { create(:user) }
  let(:question) { create(:question) }
  let(:answer) { create (:answer) }

  scenario 'Add valid answer', js: true do
    sign_in(user)
    visit question_path(question)
    save_and_open_page
    fill_in 'answer_body', with: answer.body
    click_on 'Create Answer'
    within "#answer-id-#{answer.id + 1}" do
      expect(find_field('answer_body').value).to eq answer.body
    end
  end

  scenario 'Add invalid answer', js: true do
    sign_in(user)
    visit question_path(question)
    click_on 'Create Answer'
    expect(page).to have_css('div#error_explanation')
  end
end