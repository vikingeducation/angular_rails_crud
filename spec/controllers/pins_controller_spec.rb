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

  describe 'Show a Pin' do

    describe 'GET /api/v1/pins/:id.json'
      context 'Valid Pin' do

        let!(:pin) { create(:pin) }
        let(:json) { JSON.parse(response.body) }

        before do
          get :show, :id => pin.id, format: :json
        end

        it 'should respond with a success' do
          expect(response.status).to eq(200)
        end

        it 'should return the correct post' do
          expect(json['id']).to eq(pin.id)
        end
      end

      context 'Invalid Pin' do
        let!(:pin) { build(:pin) }
        let(:json) { JSON.parse(response.body) }

        before do
          get :show, :id => 250, format: :json
        end

        it 'should not return a success' do
          expect(response.status).not_to eq(200)
        end

        it 'should return empty answer' do
          expect(response.body).to eq("")
        end
      end
  end

  describe 'Edit Pin' do
    describe 'PUT /api/v1/pin/:id/edit.json' do

      let!(:pin) { create(:pin) }

      let(:json) { JSON.parse(response.body) }

      context 'valid attributes' do

        before do
          params = attributes_for(:pin)
          params['item_name'] = 'iphone'
          put :update, :id => pin.id, :pin => params, format: :json
        end

        it 'should return a success' do
          expect(response.status).to eq(200)
        end

        it 'should return a object with the pin id' do
          expect(json['id']).to eq(pin.id)
        end
      end

      context 'invalid attributes' do

        before do
          params = attributes_for(:pin)
          params['item_name'] = nil
          put :update, :id => pin.id, :pin => params, format: :json
        end

        it 'should not return a success' do
          expect(response.status).not_to eq(200)
        end

        it 'shoud return an empty object' do

          expect(response.body).to eq("")
        end

      end
    end
  end

  describe 'delete a pin' do 

    describe 'DELETE /api/v1/pins/:id.json' do
      context 'valid id' do
        let!(:pin) {create(:pin)}
        let(:json) {JSON.parse(response.body)}

        before do
          delete :destroy, id: pin.id, format: :json
        end

        it 'should return a success' do
          expect(response.status).to eq(204)
        end

        it 'should destroy a pin' do
          expect(Pin.all.count).to eq(0)
        end
      end

      context 'invalid id' do
        let(:json) {JSON.parse(response.body)}

        before do
          delete :destroy, id: 142, format: :json
        end

        it 'should not return success' do
          expect(response).not_to eq(204)
        end
      end
    end
  end
end






