require 'rails_helper'

RSpec.describe PinsController, type: :controller do

  let(:pin){ create(:pin) }

  describe "GET /pins.json" do

    let(:data){ JSON.parse(response.body) }

    before do
      get :index, format: :json
    end

    it 'should respond with a success' do
    expect( response.status ).to eq( 200 )
    end

    it 'returns an array with all pins' do
      expect( data ).to be_a Array
    end

    it 'should return all the pins' do
      expect( data ).to eq Pin.all
    end

  end

  describe "CREATE /pins.json" do

    let(:json){ JSON.parse(response.body) }

    before do
      post :create, pin: attributes_for(:pin), format: :json
    end

    it 'should respond with a success' do
    expect( response.status ).to eq( 201 )
    end

    it 'returns a JSON obj' do
      expect( json ).to be_a Hash
    end

    it 'should return the newly created pin' do
      expect( json.keys ).to eq(["id", "item_name", "buy_sell", "description", "user_id", "created_at", "updated_at"])
    end

  end

  describe "SHOW /pins/id.json" do

    let(:json){ JSON.parse(response.body) }
    let(:user) { create(:user) }

    before do
      get :show, id: pin.id, format: :json
    end

    it 'should respond with a success' do
    expect( response.status ).to eq( 200 )
    end

    it 'returns a JSON obj' do
      expect( json ).to be_a Hash
    end

    it 'should return the newly created pin' do
      expect( json.keys ).to eq(["id", "item_name", "buy_sell", "description", "user_id", "created_at", "updated_at"])
    end

    it 'should have information about the user'

  end

end
