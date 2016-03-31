require 'rails_helper'




describe PinsController do
  describe "GET /pins" do

    let (:pin) { create(:pin) }

    let (:json) { JSON.parse(response.body) }

    before do
      pin
      get :index, format: :json
    end

    it 'should respond with 200' do
      expect(response.status).to eq(200)
    end

    it 'should return valid JSON collection' do
      expect(json).to be_a Array
    end

    it 'returns all existing pins' do
      expect(json.length).to eq(1)
    end

  end
end
