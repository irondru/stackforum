require 'rails_helper'

feature 'Create question' do

  given(:user) { create(:user) }
  let(:question) { create(:question) }

  scenario 'Auth user create valid question' do
    create_question
    expect(page).to have_content question.title
    expect(page).to have_content question.body
  end

  scenario 'Auth user create invalid question' do
    sign_in(user)
    expect(page).to have_content 'Signed in successfully.'
    visit root_path
    click_on 'New Answer'
    click_on 'Create Question'
    expect(page).to have_css('div#error_explanation')
    expect(current_path).to eq questions_path
  end

  scenario 'Non-auth user create question' do
    visit root_path
    click_on 'New Answer'
    expect(page).to have_css('input#user_email')
    expect(page).to have_css('input#user_password')
  end
end