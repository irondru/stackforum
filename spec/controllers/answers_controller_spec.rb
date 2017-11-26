require 'rails_helper'

describe AnswersController, type: :controller do
  let!(:question) { create(:question) }
  let(:answer) { build(:answer) }
  let(:invalid_answer) { build(:invalid_answer) }

  describe 'POST #create' do
    context 'with valid attributes' do
      it 'saves the answer in the database' do
        expect { post :create, params: {answer: answer.attributes, question_id: question}}.to change(Answer, :count).by(1)
      end
    end

    context 'with invalid attributes' do
      it 'does not save the question' do
        expect { post :create, params: {answer: invalid_answer.attributes, question_id: question}}.to_not change(Answer, :count)
      end
    end
  end

  describe 'GET #index' do
    let(:answers) {create_list(:answer, 2)}

    before {get :index, params: { question_id: question }}

    it 'populates an array of all questions' do
      expect(assigns(:answers)).to match_array(answers)
    end

    it 'render index view' do
      expect(response).to render_template(:index)
    end
  end

  describe 'GET #new' do
    before { get :new, params: {question_id: question}}

    it 'render new view' do
      expect(response).to redirect_to question_path(assigns(:question))
    end
  end

end