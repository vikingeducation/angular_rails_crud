require 'rails_helper'

describe PinsController do

  describe 'GET /pins.json' do

    let(:json) { JSON.parse(response.body) }

    before do
      process :index, format: :json
    end

    it 'should respond with a success status' do
      expect(response.status).to eq(200)
    end

    it 'returns a valid JSON object' do
      expect(json).to be_a Array
    end

    it 'returns objects with the right keys' do
      expect(json[0].keys).to eq( [:id, :item_name, :buy_sell, :description, :user_id])
    end

  end

end
