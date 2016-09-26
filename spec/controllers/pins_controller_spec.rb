require 'rails_helper'


describe PinsController do

  describe 'get all pins' do

    let!(:pin) {create(:pin)}

    describe 'GET /api/v1/pins.json' do

      let(:json) { JSON.parse(response.body) }

      before do
        get :index, format: :json
      end

      it 'should respond with a success' do
        expect( response.status ).to eq( 200 )
      end

      it 'should have one object' do
        expect( json.length).to eq(1)
      end

      it 'return a valid JSON object' do
        expect(json).to be_a Array
      end

      it 'return an object with the Pin id' do
        expect(json.first['id']).to eq(pin.id)
      end

      it 'return an object with the Pin Body' do
        expect(json.first['item_name']).to eq(pin.item_name)
      end

      it 'return the right keys' do
        expect(json.first.keys).to eq(['id', 'item_name', 'buy_sell', 'description', 'user_id', 'created_at', 'updated_at'])
      end

    end

  end

  describe 'create a new pin' do

    describe 'POST /api/v1/pins.json' do

      let!(:user) {create(:user)}

      context 'right params' do


        let(:json) { JSON.parse(response.body) }

        before do
          params = attributes_for(:pin)
          post :create, :pin => params, format: :json
        end

        it 'should respond with a success' do
          expect(response.status).to eq(200)
        end

        it 'should return a JSON object' do
          expect(json).to be_a Hash
        end

        it 'return an objectwith the item name of the pin' do
          expect(json['item_name']).to eq('macbook')
        end

      end

      context 'missing params' do
        before do
          params = attributes_for(:pin)
          params[:description] = nil
          post :create, :pin => params, format: :json
        end

        it 'should not respond with a success' do
          expect(response.status).not_to eq(200)
        end

        it 'should not have save the object' do
          expect(Pin.all.count).to eq(0)
        end
      end
    end
  end
end