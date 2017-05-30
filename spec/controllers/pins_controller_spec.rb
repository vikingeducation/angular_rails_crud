require 'rails_helper'

describe PinsController do

  let(:json) { JSON.parse(response.body) }
  let(:user) { User.create(username: 'a user') }

  describe 'GET pins.json' do

    before do
      get :index, format: :json
    end

    it 'should return success status' do
      expect(response.status).to eq 200
    end

    it 'should return a json obj' do
      expect(json).to be_an Array
    end
  end

  

end
