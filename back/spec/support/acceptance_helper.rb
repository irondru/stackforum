module AcceptanceHelper

  def sign_in(user)
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_on 'Log in'
  end

  def create_question
    sign_in(user)
    expect(page).to have_content 'Signed in successfully.'
    visit root_path
    click_on 'New Answer'
    fill_in 'question_title', with: question.title
    fill_in 'question_body', with: question.body
    click_on 'Create Question'
  end
end