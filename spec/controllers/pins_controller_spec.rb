require 'rails_helper'

RSpec.describe PinsController, type: :controller do
  let(:pin){ FactoryGirl.create(:pin)}
  let(:json){ JSON.parse(response.body) }

  describe 'GET /pins' do
    before do
      get :index, format: :json
    end

    it 'responds successfully' do
      expect(response).to be_success
    end

    it 'responds with JSON' do
      expect(json).to be_an Array
    end

  end

end
