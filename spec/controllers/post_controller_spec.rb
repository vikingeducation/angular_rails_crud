require 'rails_helper'

describe PinsController do

  let(:json) { JSON.parse(response.body) }
  let!(:pin) { create(:pin) }

  describe 'GET pins' do

    before do
      create_list(:pin, 9)
      get :index, format: :json
    end


    it 'should return collection of pins' do
      expect(json).to be_an(Array)
    end


    it 'should return the full number of pins' do
      expect(json.count).to eq(10)
    end


    it 'should include associated usernames' do
      expect(json.first['user']['username']).to eq(pin.user.username)
    end

  end


end