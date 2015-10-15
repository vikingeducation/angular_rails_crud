require 'rails_helper'

describe PinsController do

  let(:json) { JSON.parse(response.body) }


  describe 'GET pins' do

    let!(:pin) { create(:pin) }

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


  describe 'POST pins' do

    let!(:pin) { create(:pin) }
    let(:status) { response.status }

    context 'with valid params' do

      it 'should save with valid params' do
        current_pins = Pin.all.count
        post :create, format: :json, :pin => attributes_for(:pin)
        expect(Pin.all.count).to eq(current_pins + 1)
      end

      it 'should return status 201' do
        post :create, format: :json, :pin => attributes_for(:pin)
        expect(response).to have_http_status(:created)
      end

    end


    context 'with invalid params' do

      let!(:user) { create(:user) }

      it 'should not save' do
        current_pins = Pin.all.count
        post :create, :format => :json, :pin => attributes_for(:pin, :description => nil)
        expect(Pin.all.count).to eq(current_pins)
      end

      it 'should return status 422' do
        post :create, :format => :json, :pin => attributes_for(:pin, :description => nil)
        expect(response).to have_http_status(422)
      end

    end


  end


  describe 'GET pins#show' do


    context 'for an existing pin' do

      let(:pin) { create(:pin) }
      let(:json) { JSON.parse(response.body) }

      before do
        get :show, :format => :json, id: pin.id
      end

      it 'should return status OK' do
        expect(response).to have_http_status(:ok)
      end

      it 'should return the right pin id' do
        expect(json['id']).to eq(pin.id)
      end

      it 'should return the right pin item_name' do
        expect(json['item_name']).to eq(pin.item_name)
      end

      it 'should include the username' do
        expect(json['user']['username']).to eq(pin.user.username)
      end

    end


    context 'when pin does not exist' do

      it 'should return error 404' do
        get :show, :format => :json, :id => 999
        expect(response).to have_http_status(404)
      end

    end


  end



  describe 'PATCH pins' do

    let!(:pin) { create(:pin) }
    let(:new_title) { 'New title'}

    context 'with valid params' do

      before do
        patch :update, format: :json, :id => pin.id, :pin => attributes_for(:pin, :item_name => new_title)
      end

      it 'should change the pin in the database' do
        expect(Pin.find(pin.id).item_name).to eq(new_title)
      end

      it 'should return status OK' do
        expect(response).to have_http_status(:ok)
      end

    end


  end


end