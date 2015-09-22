require 'rails_helper'

RSpec.describe PinsController, type: :controller do

  let(:user){ create(:user)}
  let!(:pin){ create(:pin, :user => user)}
  let(:json){ JSON.parse(response.body) }


  # Index page
  describe 'GET /pins' do

    before do
      get :index, format: :json
    end

    it 'should return a collection of pins' do
      expect(json.map{|pin| pin['id']}).to include(pin.id)
    end

    it 'should return a collection of pins that includes a user' do
      expect(json.map{|pin| pin['user_id'] }).to include(user.id)
    end

  end

  # Create page
  describe 'POST /pins' do

    it 'should create a new pin with valid submission' do
      expect do
        post :create, format: :json, pin: attributes_for(:pin, user_id: user.id)
      end.to change(Pin, :count).by(1)
    end

    it 'should not create a new pin with invalid information' do
      expect do
        post :create, format: :json, pin: attributes_for(:pin, user_id: nil)
      end.to raise_error
    end

  end

  # Show page

  # Update page
  describe 'PUT /pin' do

  end

  # Delete page

end
