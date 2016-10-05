require 'rails_helper'

describe PinsController do
  describe "GET /api/v1/pins.json" do

    let( :json ){ JSON.parse( response.body ) }

    before do
      Pin.create(item_name: 'item1', buy_sell: true, description: 'supercool')
      Pin.create(item_name: 'item2', buy_sell: false,
        description: 'supernotcool')
      get 'index', format: :json
    end

    it 'should respond with a success' do
      expect( response.status ).to eq( 200 )
    end

    it 'returns a valid JSON object' do
      expect( json ).to be_a Array
    end

    it 'returns an object with the post ID' do
      expect( json.length ).to be 2
    end

    it 'returns an object with the posts body' do
      expect( json.first["description"] ).to be_a String
    end

    it 'returns an object with the posts body' do
      expect( json.first["description"] ).to_not be_empty
    end

    it 'returns the right keys' do
      expect( json.first.keys ).to eq( ["id", "item_name", "buy_sell", "description", "user_id", "created_at", "updated_at"] )
    end
  end
end

