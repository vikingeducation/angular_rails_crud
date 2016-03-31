require 'rails_helper'

describe PinsController do

  let (:pin) { create(:pin) }


  describe "GET /pins" do

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


  describe 'POST /pins' do

    let (:json) {JSON.parse(response.body)}


    context 'happy tests' do

      before do
        post :create, pin: attributes_for(:pin), format: :json
      end

      it 'responds with 200 for valid pin' do
        expect(response.status).to eq (200)
      end

      it 'responds to successful request with the new pin' do
        expect(json).to be_a Hash
      end

      it 'user count increase by one' do

      end

    end

    context 'sad tests' do

      it 'does not create object with bad params' do
        expect { post :create, pin: {}, format: :json }.to raise_error(ActionController::ParameterMissing)
      end

      it 'does not create object with item_name that is too long' do
        post :create, pin: attributes_for(:pin, :item_name =>"Rectangular Angular Pants Rectangular Angular Pants Rectangular Angular Pants Rectangular Angular Pants Rectangular Angular Pants Rectangular Angular Pants"), format: :json

        expect(response.status).to eq(422)
      end

    end


  end




end