require 'rails_helper'

describe PinsController do
	describe "GET api/v1/pins.json" do
		let( :json ){ JSON.parse(response.body) }

		before do
			get :index, format: :json
		end

		it "should respond with a success" do
			expect( response.status ).to eq(200)
		end

		it "returns a valid JSON object" do
			expect(json).to be_a Hash
		end

		it "returns the right keys" do
			expect(json.body.keys).to eq([:id, :item_name, :buy_sell, :description, :user])
		end
	end
	
end