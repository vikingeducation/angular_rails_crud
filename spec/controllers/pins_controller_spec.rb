require 'rails_helper'

describe PinsController do
  let(:pins) { create_list(:pin, 5) }
  let(:json) { JSON.parse(response.body) }

  describe 'GET #index' do
    before(:each) do
      pins
      get :index, format: :json
    end

    it 'returns five pins' do
      expect(json.length).to eq 5
    end

    it 'should respond with a success' do
      expect(response.status).to eq(200)
    end

    # You want to know that this JSON can be parsed
    it 'returns a valid JSON object' do
      expect(json).to be_an Array
    end

    it 'returns each pin' do
      expect(json.map { |pin| pin['id'] }).to match_array pins.map(&:id)
    end
  end


  describe 'GET #show' do
    let(:pin) { create(:pin) }

    before(:each) do
      get :show, format: :json, id: pin.id
    end
    it 'should respond with a success' do
      expect(response.status).to eq(200)
    end

    it 'returns a valid JSON object' do
      expect(json).to be_a Hash
    end

    it 'returns an object with the pin ID' do
      expect(json['id']).to be pin.id
    end

    it 'returns an object with the pins description' do
      expect(json['description']).to eq pin.description
    end
  end


  describe 'POST #create' do
    let(:pin_attributes) { attributes_for(:pin) }

    it 'creates a new pin' do
      post :create, format: :json, pin_attributes
    end
  end
end
