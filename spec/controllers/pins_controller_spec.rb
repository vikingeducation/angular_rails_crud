require 'rails_helper.rb'
require 'pry'

describe PinsController do
  describe "GET /api/v1/pins.json" do

    let( :json ){ JSON.parse( response.body ) }

    before do
      pin = create(:pin)
      get 'index', format: :json
    end

    it 'should respond with a success' do
      expect( response.status ).to eq( 200 )
    end

    it 'returns a valid JSON object' do
      expect( json ).to be_a Array
    end

    it 'returns an object with the post ID' do
      expect( json.first["id"] ).to be_a Integer
    end

    it 'returns an object with the posts body' do
      expect( json.first["item_name"] ).to eq 'item'
    end

    it 'returns the right keys' do
      expect( json.first.keys ).to eq( ["id", "item_name", "buy_sell", "description", "user_id", "created_at", "updated_at", "user"] )
    end
  end

  describe "POST /api/v1/pins.json" do
    it 'should respond with a success' do
      expect( response.status ).to eq( 200 )
    end

    it 'should post correctly' do
        build(:pin)
        post "create", pin: FactoryGirl.attributes_for(:pin)
        expect( Pin.first.item_name ).to eq "item"
      end
  end

  describe "PATCH /api/v1/pin/:id.json " do

    let(:pin){ create(:pin) }

    it 'should respond with a success' do
      expect( response.status ).to eq( 200 )
    end

    it 'should update correctly' do
      attrs = { item_name: "leorrel" }
      patch "update", id: pin.id, pin: attrs, format: :json
      expect( Pin.first.item_name ).to eq "leorrel"
    end

  end

end
